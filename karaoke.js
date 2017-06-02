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
  },
  singRandom: function() {
    var responses = Object.keys(callResponses).map((key) => callResponses[key]);
    var response = responses[Math.floor(Math.random()*responses.length)];
    if(response.constructor === Array) {
      return response[Math.floor(Math.random()*response.length)];
    } else {
      return response;
    }
  }
}

var callResponses = {
  "im like tt": "Just like TT!",
  "just like tt": "Tell me that you’ll be my baby!",
  "cause i got issues": "...but you got them too!",
  "i got issues": "...but you got them too!",
  "so give them all to me": "...and I'll give mine to you!",
  "a whole new world": ["A new fantastic point of view!", "A dazzling place I never knew!", "A hundred thousand things to see!", "With new horizons to pursue!"],
  "were all in this together": ["Once we know\nThat we are\nWe're all stars\nAnd we see that!", "And it shows\nWhen we stand\nHand-in-hand\nMake our dreams come~", "When we reach\nWe can fly\nGo in sight\nWe can make it!", "Once we see\nThere's a chance\nThat we have\nAnd we take it!"],
  "start of something new": "It feels so right...to be here with you!",
  "you just want attention": ["...you don't want my heart!", "...knew it from the start!"],
  "you dont want my heart": "Maybe you just hate the thought of me with someone new~",
  "knew it from the start": "You're just making sure I'm never getting over you, oh~",
  "tell me why": ["Ain't nothing but a heartache!", "Ain't nothing but a mistake!", "I never want to hear you say~"],
  "am i original": "*yeahhhh!*",
  "am i the only one": "*yeahhhh!*",
  "am i sexual": "*yeahhhh!*",
  "everybody": "*yeahhhh!*",
  "rock your body": "*yeahhhh!*",
  "she wears short skirts": "I wear T-shirts!",
  "she wears high heels": "I wear sneakers!",
  "shes cheer captain": "...and I'm on the bleachers!",
  "been here all along": "So why can't you see, you belong with me~",
  "zen zen zen": "...世から僕は 君を探しはじめたよ!",
  "zen zen zense": "...から僕は 君を探しはじめたよ!",

}
