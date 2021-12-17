const resolvers = {
    Query: {
        topScorers: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTopScorers()
        },

        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        player: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getPlayer()
        }
    }
};
module.exports = resolvers;
