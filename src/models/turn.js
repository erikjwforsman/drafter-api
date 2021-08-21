const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	proposer: Number,
});

module.exports = mongoose.model("Turn", schema);