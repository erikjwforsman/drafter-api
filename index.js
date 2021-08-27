const express = require("express");
const { ApolloServer} = require("apollo-server-express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Team = require("./src/models/team");

const url = process.env.MONGODB_URI;
const path = require("path");
const typeDefs = require("./src/vali/typeDefs");
const resolvers = require("./src/vali/resolvers");

console.log("connecting to Mongo");
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
	.then(() => {
		console.log(`connected to MongoDB ${url}`);
	})
	.catch((error) => {
		console.log("error connection to MongoDB: ", error.message);
	});

const JWT_SECRET = process.env.JWT_SECRET;

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async({req}) => {
		const auth = req ? req.headers.authorization : null;
		if (auth && auth.toLowerCase().startsWith("bearer")) {
			const decodedToken = jwt.verify(
				auth.substring(7), JWT_SECRET
			);
			const currentUser = await Team.findById(decodedToken);
			return {currentUser};
		}
	}
});
app.use(express.static("build"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "build", "index.html"));
});


app.use(cors());
server.applyMiddleware({ app, path:"/" });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
	console.log("🚀 Server ready"));


