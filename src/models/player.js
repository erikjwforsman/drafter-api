const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	playerName: String,
	nflTeam: String,
	rank: Number,
	expectedValue: Number,
	position: String,
	bye: Number,
	injury: String
});

module.exports = mongoose.model("Player", schema);