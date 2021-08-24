const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	owner: String,
	place: Number,
	salary: Number,
	passwordHash: String,
	players: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "SoldPlayer"
	}]
});

module.exports = mongoose.model("Team", schema);