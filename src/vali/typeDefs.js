const {gql} =require("apollo-server");

const typeDefs = gql`
    type Player {
        playerName: String!
	    nflTeam: String!
        rank: Int!
        expectedValue: Int!
        position: String!
        bye: Int!
        id:ID!
    }

    type Team {
        owner: String!
        players: [SoldPlayer]
        id:ID!
    }

    type SoldPlayer {
        playerName: String!
	    nflTeam: String!
        position: String!
        owner: Team
        price: Int!
        bye: Int!
        oldId: String!
        id:ID!
    }

    type Bid {
        bidder: String!,
        player: Player!
        currentPrice: Int!,
        timeLeft: String!
    }

    type Turn{
        proposer: String!
    }

    type Query{
        allPlayers: [Player!]!
        allTeams: [Team]
        allSoldPlayers: [SoldPlayer!]!
        lastProposer: Turn
        currentBid: Bid
    }

    type Mutation{
        addPlayer(
            playerName: String!
            nflTeam: String!
            rank: Int!
            expectedValue: Int!
            position: String!
            bye: Int!
        ):Player

        addTeam(
            owner: String!
        ):Team

        addSoldPlayer(
            playerName: String!
            nflTeam: String!
            position: String!
            price: Int!
            owner: String!
            oldId: String!
            bye: Int!
        ):SoldPlayer

        changeProposer(
            newProposer: String!
        ):Turn

        changeBid(
            bidder: String
            playerId: String
            currentPrice: Int
            timeLeft: String
        ):Bid
    }
    
`;

module.exports = typeDefs;

{/*
    type SoldPlayer {
        playerName: String!
	    nflTeam: String!
        position: String!
        owner: Team!
        price: Int!
        id:ID!
    }

    type Team {
        owner: String!
        players: [SoldPlayer!]!
        id:ID!
    }




       addSoldPlayer(
            playerName: String!
            nflTeam: String!
            position: String!
            owner: Team!
            price: Int!
        ):SoldPlayer


        changeTurn(
            currentProposer: String!
        ):Turn
       
*/}