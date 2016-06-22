exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
      return new Promise(function(resolve, reject){
         if (value) {
             resolve("Yeah!");
         } else {
             reject("Nope"):
         }
      });
  },

  manipulateRemoteData: function(url) {

  }
};
