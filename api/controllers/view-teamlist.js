module.exports = {


  friendlyName: 'View teamlist',


  description: 'Display "Teamlist" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/teamlist'
    }

  },


  fn: async function (inputs, exits) {

    const axios = require('axios');

    var config =  {
      headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer 1681cfc8c904b16ad003b782591670f737135b4a5195737f9cd210b050d8bdfd65acb4229ad3dbd78232e58ee8b4ed0b6ec74834b780fa64134cc2dbc62fdfdd5bfb95144b8db32047fc2690f5809fb0fc8b1b45a91effc9adb962efbccae1a6279491d95727cdd69b7be1360d853e185420381e484cd331cdb5b7e50e5ec340",
      },
    };

    // STRAPI CALL POPULATES SEVICES ARRAY
    var teamlist = await axios.get('http://127.0.0.1:1337/api/teams?populate=*', config )
    .then(function (response) {
  
      // handle success
      return response.data.data;
    })
    .catch(function (error) {

      return [];

    })
    .finally(function () {
      // always executed
    });


    // STRAPI CALL POPULATES SEVICES ARRAY
    var sliderlist = await axios.get('http://127.0.0.1:1337/api/sliders?populate=*', config )
    .then(function (response) {
  
      // handle success
      return response.data.data;
    })
    .catch(function (error) {

      return [];

    })
    .finally(function () {
      // always executed
    });

    return exits.success({
      team: teamlist,
      sliders: sliderlist,
    });


  }


};
