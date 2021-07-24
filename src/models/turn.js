const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	proposer: String
});

module.exports = mongoose.model("Turn", schema);