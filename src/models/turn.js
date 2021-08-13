const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	proposer: Number,
	timeLeft: String //Eka

});

module.exports = mongoose.model("Turn", schema);