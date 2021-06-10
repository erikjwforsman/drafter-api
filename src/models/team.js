const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	owner: String,
	players: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "SoldPlayer"
	}]
});

module.exports = mongoose.model("Team", schema);