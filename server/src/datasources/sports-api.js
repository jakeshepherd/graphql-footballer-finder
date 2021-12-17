const {RESTDataSource} = require('apollo-datasource-rest');

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://v3.football.api-sports.io/{endpoint}',
//   headers: {
//     'x-rapidapi-key': 'e666aacd6ae4c0d9c3e71cb806300201',
//     'x-rapidapi-host': 'v3.football.api-sports.io'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://v3.football.api-sports.io/';
      }

      willSendRequest(request) {
        request.headers.set('x-rapidapi-key', 'e666aacd6ae4c0d9c3e71cb806300201');
        request.headers.set('x-rapidapi-host', 'v3.football.api-sports.io');
      }

      async getPlayer() {
        return this.get('/players?id=276&season=2019').then(r => {
            return r.response[0].player.player
        })
      }

      async getTopScorers() {
        return this.get('/players/topscorers?season=2020&league=39').then(r => {
            return r.response.map((player) => {return player.player})
        })
      }
  }
module.exports = TrackAPI;
