const express = require("express");
const { ApolloServer} = require("apollo-server-express");
const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

// const Player = require("./src/models/player");
// const SoldPlayer = require("./src/models/soldPlayer");
// const Team = require("./src/models/team");

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

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.applyMiddleware({ app, path:"/" });

const PORT = process.env.PORT || 4000;

//OG KOODI
app.listen(PORT, () =>
	console.log("🚀 Server ready"));

// app.listen(PORT, () =>
// 	console.log(`🚀 Server ready at ${PORT}`));

// app.listen(PORT).then(({ url, subscriptionsUrl }) => {
// 	console.log(`Server ready at ${url}`);
// 	console.log(`Subscriptions ready at ${subscriptionsUrl}`);
// });

// app.listen(PORT).then(({ url, subscriptionsUrl }) => {
// 	console.log(`Server ready at ${url}`);
// 	console.log(`Subscriptions ready at ${subscriptionsUrl}`);
// });

// app.listen(PORT).then(({ url, subscriptionsUrl }) => {
// 	console.log(`Server ready at ${url}`);
// 	console.log(`Subscriptions ready at ${subscriptionsUrl}`);
// });
