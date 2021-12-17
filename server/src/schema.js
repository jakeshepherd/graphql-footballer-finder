const {gql} = require('apollo-server');

const typeDefs = gql`
  # Schema definitions go here
	type Footballer {
		name: String
		photo: String
	}

	type Query {
		player: Footballer
		topScorers: [Footballer]
	}
`;

// club: Club
// thumbnail: String

// type Club {
// 	name: String
// 	yearEstablished: String
// }

module.exports = typeDefs;
