const {gql} =require("apollo-server");

const typeDefs = gql`
    type Player {
        playerName: String!
	    nflTeam: String!
        rank: Int!
        expectedValue: Int!
        position: String!
        bye: Int!
        injury: String
        id:ID!
    }

    type Team {
        owner: String!
        place: Int
        salary: Int
        players: [SoldPlayer]
        passwordHash: String
        id:ID!
    }

    type Token {
        value: String!
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
        me: Team
    }

    type Mutation{
        login(
            owner: String
            password: String
        ): Token

        addPlayer(
            playerName: String!
            nflTeam: String!
            rank: Int!
            expectedValue: Int!
            position: String!
            injury: String
            bye: Int!
        ):Player

        addTeam(
            owner: String!
            password: String
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

        changeProposer:Turn

        nullPropser:Turn

        nullAll:Turn

        changeBid(
            bidder: String!
            playerId: String!
            currentPrice: Int
            timeLeft: String
        ):Bid
    }
`;

module.exports = typeDefs;