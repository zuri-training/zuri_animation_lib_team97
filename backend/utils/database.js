const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    mongoClient.connect("mongodb+srv://animlib:SS03I0XYhy6POvI4@cluster0.npfqb.mongodb.net/?retryWrites=true")
    .then(client => {
        _db = client.db();
        callback();
        console.log("Connected!")
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

const getDb = () => {
    if(_db){
        return _db;
    }
    throw "No database found!";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;