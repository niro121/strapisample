module.exports = {


  friendlyName: 'View teammember',


  description: 'Display "Teammember" page.',

  inputs: {

    id: {
      type: 'number',
    }

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/teammember'
    }

  },


  fn: async function (inputs,exits) {

    const axios = require('axios');

    var config =  {
      headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer 1681cfc8c904b16ad003b782591670f737135b4a5195737f9cd210b050d8bdfd65acb4229ad3dbd78232e58ee8b4ed0b6ec74834b780fa64134cc2dbc62fdfdd5bfb95144b8db32047fc2690f5809fb0fc8b1b45a91effc9adb962efbccae1a6279491d95727cdd69b7be1360d853e185420381e484cd331cdb5b7e50e5ec340",
      },
    };


    // STRAPI CALL POPULATES SEVICES ARRAY
    var member = await axios.get('http://localhost:1337/api/teams/' + inputs.id, config )
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

    console.log("member",member);

    return exits.success({
      member: member,
    });

  }


};
