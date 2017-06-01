'use strict';

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/bogfoxbot";

var countWord = function(db, user_id, word, callback) {
  var collection = db.collection('words');
  collection.update({user_id: user_id, word: word}, {
    $inc: {count: 1},
    $set: {user_id: user_id, word: word}
  }, {upsert: true});
}

var getCounts = function(db, message, word) {
  var collection = db.collection('words');
  collection.find({word: 'same'}).toArray(function(err, docs) {
    var entries = [];
    docs.forEach(function(doc) {
      var user = message.client.users.get(doc.user_id.toString());
      if(user) {
        entries.push(user.username + ': ' + doc.count.toString());
      }
    });
    message.channel.send("Number of sames:\n" + entries.join("\n"));
  });
}

module.exports = {
  count: function(message) {
    var line = message.content.toLowerCase();
    if(line.match(/same/i)) {
      MongoClient.connect(url, function(err, db) {
        countWord(db, message.author.id, 'same');
        db.close();
      });
    }
  },
  countSames: function(message) {
    MongoClient.connect(url, function(err, db) {
      getCounts(db, message, 'same');
      db.close();
    });
  }
}
