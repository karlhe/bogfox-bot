'use strict';

module.exports = {
  singBack: function(message) {
    var line = message.content.trim().toLowerCase();
    line = line.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    var response = callResponses[line];
    if(response != null) {
      if(response.constructor === Array) {
        return response[Math.floor(Math.random()*response.length)];
      } else {
        return response;
      }
    } else {
      return null;
    }
  }
}

var callResponses = {
  "im like tt": "Just like TT!",
  "just like tt": "Tell me that you’ll be my baby!",
  "cause i got issues": "...but you got them too!",
  "i got issues": "...but you got them too!",
  "so give them all to me": "...and I'll give mine to you!",
  "a whole new world": ["A new fantastic point of view!", "A dazzling place I never knew!", "A hundred thousand things to see!", "With new horizons to pursue!"]
}
