var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/bogfoxbot";
var assert = require('assert');

var getWords = function(db, callback) {
  var collection = db.collection('words');
  collection.find({}).toArray(function(err, words) {
      assert.equal(err, null);
      console.log(words);
      callback(words);
  });
}

var addWords = function(db, callback) {
  var collection = db.collection('words');
  collection.update({user_id: '94655880032686080', word: 'same'}, {
    $inc: {count: 1},
    $set: {user_id: '94655880032686080', word: 'same'}
  }, {upsert: true});
  callback();
}

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected to server");
  db.collection('words').remove({});

  addWords(db, function() {
    getWords(db, function() {
      db.close();
    });
  });
});
