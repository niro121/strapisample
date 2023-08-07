parasails.registerPage('teamlist', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    openmodal:false,
    syncing:false,
    cloudError:'',

    formData:{
      name:'',
    },

    formErrors:{},

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
  },
  mounted: async function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    open: function(){

      this.openmodal = true;

    },

    close: function(){

      this.openmodal = false;

    },

    // VALIDATION
    handleParsingForm: function(){


      this.formErrors = {};

      var argins = this.formData;

      if (!argins.name) {

        this.formErrors.name = true;

      }

      if (Object.keys(this.formErrors).length > 0) {
        return
      }

      console.log("argins",argins);

      return argins;

    },

    submittedForm: function(result){

      this.team.push(result.member);
      this.openmodal = false;

    },
    
  }
});
