const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	bidder: String,
	player: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Player"
	},
	currentPrice: Number,
	timeLeft: Number
});

module.exports = mongoose.model("Bid", schema);