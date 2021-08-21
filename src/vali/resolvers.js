const Player = require("../models/player");
const SoldPlayer = require("../models/soldPlayer");
const Team = require("../models/team");
const Turn = require("../models/turn");
const Bid = require("../models/bid");

const resolvers = {
	Query: {
		allPlayers: () => Player.find({}),
		// eslint-disable-next-line no-unused-vars
		allTeams: async (root, args) => Team.find({}).populate("players"),
		allSoldPlayers: () => SoldPlayer.find({}),
		lastProposer: () => Turn.findOne(),
		currentBid: () => Bid.findOne() 
	},

	Team: {
		players: async (root) => {
			const retPlayers = [];
			// eslint-disable-next-line no-undef
			for(i of root.players){
				// eslint-disable-next-line no-undef
				const player = await SoldPlayer.find({_id:i});
				retPlayers.push(player[0]);
			}
			return retPlayers;
		}
	},

	Bid: {
		player: async(root) => {
			return await Player.findOne({_id:root.player}); 
		}
	},

	Mutation: {
		addPlayer: async(root, args) => {
			const player = new Player({
				playerName: args.playerName,
				nflTeam: args.nflTeam,
				rank: args.rank,
				expectedValue: args.expectedValue,
				position: args.position,
				bye: args.bye,
				injury: args.injury
			});
			player.save();
			return player;
		},
		addTeam: async(root, args) => {
			const team = new Team({
				owner: args.owner,
				place: args.place,
				salary:0
			});
			return team.save();
		},
		addSoldPlayer: async(root, args) => {
			const buyer = await Team.findOne({_id : args.owner});
			console.log(buyer);
			const soldPlayer = new SoldPlayer({
				playerName: args.playerName,
				nflTeam: args.nflTeam,
				position: args.position,
				price: args.price,
				oldId: args.oldId,
				bye: args.bye

			});
			
			await soldPlayer.save();		
			buyer.salary=(buyer.salary+args.price);
			buyer.players.push(soldPlayer);

			buyer.save();
			return soldPlayer;
            
		},
		changeProposer: async() => { 
			let current = await Turn.findOne();
			const teams = await Team.find({});
			const numberOfTeams = 13;
			const rosterSize = 19;

			if(current === null){
				const firstProposer = new Turn ({
					proposer: 1,
				});
				return firstProposer.save();
			} 

			//CurrentBidin "nullaus"
			await Bid.deleteOne();

			//Saa luvun, josta selvitetään ehdotuskelpoisuus
			const isOk = (luku) =>{
				//Selvittää voiko tämän vuoroinen ehdottaa => muuten vuoro seuraavalle, jos nykyinen on viimeinen => Vuoro ensimmäiselle
				//Luku on viimeeksi ehdottaneen tunnsistenumero, josta aletaan edetä
				let target = luku<numberOfTeams ? luku+1 : 1;	//tarkistaa onko nyk ehdottaja arrayn viimeinen => jos on niin aloitetaan alusta
				while(target<200){	//Luku vapaa kunhan enemmän kuin joukkueiden määrä
					const team = teams.filter(t => t.place===target); //Voi kirjoittaa myös findilla ilman arrayta
					if(team[0].players.length<rosterSize){		//Selvittää onko joukkueessa vähemmän pelaajia kuin on sallittu, jos on, joukkue saa ehdottaa
						break;
					}
					target = target<numberOfTeams ? target+1 : 1; //Ed. joukkueessa oli maksimimäärä pelaajia => tarkastetaan seuraava (jos array täynnä, aloitetaan ensimmäisestä)
				}
				return(target);

			};
			const thisWillBeSaved = isOk(current.proposer);

			if (thisWillBeSaved<(numberOfTeams+1)){				//Tähän joukkueiden määrä+1
				const next = thisWillBeSaved;
				return Turn.findByIdAndUpdate(current._id, {proposer: next});
			} 

			return Turn.findByIdAndUpdate(current._id, {proposer: 1});	
		},

		nullPropser: async() => {
			await Bid.deleteOne();
			await Turn.deleteOne();
			return null;
		},

		nullAll: async() => {
			//Poistetaan pelaajat joukkueista
			const teams = await Team.find();
			for (const t in teams){
				teams[t].salary=0;
				teams[t].players=[];
				const retTeam = teams[t];
				await Team.findByIdAndUpdate(teams[t]._id, retTeam);
			}
			//Poistetaa kaikki myydyt pelaajat
			await SoldPlayer.remove({});

			await Bid.deleteOne();
			await Turn.deleteOne();
			return null;
		},

		changeBid: async(root, args) => {
			let current = await Bid.findOne();

			//Huutokaupan ensimmäinen tarjous
			if(current === null){				
				const biddedPlayer = new Bid({
					bidder: args.bidder,
					player: await Player.findOne({_id:args.playerId}),
					currentPrice: 1,
					timeLeft: String(Date.now()+30000)
				});
				return biddedPlayer.save();
			}
			
			//Tarjoaminen uudesta pelaajasta alkaa
			if( String(current.player)!==args.playerId ){ //Current palaa objectina, ongelma?
				const player = await Player.findOne({_id:args.playerId});
				return Bid.findByIdAndUpdate(current._id, { bidder: args.bidder, currentPrice: 1, timeLeft:String(Date.now()+30000), player:player } );
			} 
			

			//
			//PITÄÄKÖ TEHDÄ ERILLINEN NULLAUS??
			//
			
			//Lopettaa virheellisen tarjouksen tarkistamisen
			if (current.currentPrice>=args.currentPrice){
				return current;
			}

			//Jo myynnissä oleva pelaaja
			//Nostaa ajan tarjouksen jälkeen n. 10 sekuntiin, jos olisi muuten alle (käsitellään 12000, koska viive)
			let newTime = Number(current.timeLeft);
			if (newTime-Date.now()<10000){
				newTime=Date.now()+12000;
			}

			await Bid.findByIdAndUpdate(current._id, {bidder: args.bidder, currentPrice: args.currentPrice, timeLeft:String(newTime)});
			console.log(current);
			return current;	//vaihda takaisin Bid.findBy... palautukseen
		}
	},
};

module.exports = resolvers;

