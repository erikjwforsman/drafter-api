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
			return player.save();
		},
		addTeam: async(root, args) => {
			const team = new Team({
				owner: args.owner
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

			soldPlayer.save();

			buyer.players.push(soldPlayer);
			return buyer.save();
            
		},
		changeProposer: async(root, args) => {
			let current = await Turn.findOne();
			if(current === null){
				const firstProposer = new Turn ({
					proposer: args.newProposer
				});
				return firstProposer.save();
			}

			return Turn.findByIdAndUpdate(current._id, {proposer: args.newProposer});
		},
		changeBid: async(root, args) => {
			let current = await Bid.findOne();
			if(current === null){
				const biddedPlayer = new Bid({
					bidder: args.bidder,
					player: await Player.findOne({_id:args.playerId}),
					currentPrice: 1,
					timeLeft: Date.now()+30000
				});
				return biddedPlayer.save();
			}
			//Nostaa ajan tarjouksen jälkeen 10 sekuntiin, jos olisi muuten alle
			let newTime = current.timeLeft;
			if (newTime-Date.now()<10000){
				console.log("Kiirettä pitää, Nostetaan kymppiin");
				newTime=Date.now()+10000;
			}
			// let newTimeLeft = Date.now()+12345;
			// console.log("Ajan tsekkaus",newTimeLeft); 
			return Bid.findByIdAndUpdate(current._id, {bidder: args.bidder, currentPrice: args.currentPrice, timeLeft:newTime});
		}
	}
};

module.exports = resolvers;

