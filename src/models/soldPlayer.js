const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	playerName: String,
	nflTeam: String,
	position: String,
	price: Number,
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Team"
	}
});

module.exports = mongoose.model("SoldPlayer", schema);