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
        place: Int
        salary: Int
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
        currentPrice: Int,
        timeLeft: String
    }

    type Turn{
        proposer: Int!
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
            place: Int
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
            current: Int
        ):Turn

        changeBid(
            bidder: String!
            playerId: String!
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