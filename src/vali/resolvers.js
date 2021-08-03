//const mongoose = require("mongoose");

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
		currentBid: () => Bid.findOne() //Rakennetaan vielä pelaajan tulostus
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
			//const retPlayer = await Player.findOne({_id:root.player});//
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
				bye: args.bye
			});
			player.save();
			return player;
		},
		addTeam: async(root, args) => {
			const team = new Team({
				owner: args.owner,
				place: args.place
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

			buyer.players.push(soldPlayer);
			// return buyer.save(); testi alkaa
			buyer.save();
			return soldPlayer;
            
		},
		changeProposer: async(root, args) => { //Pitääkö olla root?
			

			if (args){
				console.log(args);
			}
			let current = await Turn.findOne();
			const teams = await Team.find({});

			if(current === null){
				const firstProposer = new Turn ({
					proposer: 1
				});
				return firstProposer.save();
			} 
			//CurrentBidin "nullaus"
			await Bid.deleteOne();
			//Saa luvun, josta selvitetään kelpoisuus
			const isOk = (luku) =>{
				let target = luku<12 ? luku+1 : 1;	//targetin pitää olla joukkueiden määrä-1
				while(target<20){	//Luku vapaa kunhan enemmän kuin joukkueiden määrä
					const team = teams.filter(t => t.place===target);
					if(team[0].players.length<19){		//Tähän joukkueiden maksimirosterikoko 
						break;
					}
					target = target<12 ? target+1 : 1; //targetin pitää olla joukkueiden määrä-1
				}
				return(target);

			};
			const thisWillBeSaved = isOk(current.proposer);

			if (thisWillBeSaved<13){				//Tähän joukkueiden määrä+1
				const next = thisWillBeSaved;

				return Turn.findByIdAndUpdate(current._id, {proposer: next});
			} 
			//console.log()
			return Turn.findByIdAndUpdate(current._id, {proposer: 1});
			
			
		},
		changeBid: async(root, args) => {
			console.log("ALKAAAA");
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
				
				console.log("aktiivinen");
				return Bid.findByIdAndUpdate(current._id, { bidder: args.bidder, currentPrice: 1, timeLeft:String(Date.now()+30000), player:player } );
			} 
			

			//
			//PITÄÄKÖ TEHDÄ ERILLINEN NULLAUS??
			//
			
			//Jo myynnissä oleva pelaaja
			//Nostaa ajan tarjouksen jälkeen 10 sekuntiin, jos olisi muuten alle
			let newTime = Number(current.timeLeft);
			if (newTime-Date.now()<10000){
				console.log("Kiirettä pitää, Nostetaan kymppiin");
				newTime=Date.now()+10000;
			}

			await Bid.findByIdAndUpdate(current._id, {bidder: args.bidder, currentPrice: args.currentPrice, timeLeft:String(newTime)});
			console.log(current);
			return current;	//vaihda takaisin Bid.findBy... palautukseen
		}
	}
};

module.exports = resolvers;

