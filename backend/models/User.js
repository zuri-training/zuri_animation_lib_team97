const getDb = require('./utils/database').getDb;
class User{
    constructor(username, pwd){
        this.username = username;
        this.pwd = pwd;
    } 

    save = () => {
       const db = getDb();
       db.collection('users')
       .insertOne(this)
       .then(result => {
            console.log(result);
       })
       .catch(err => {
            console.log(err);
       });
    }
}

module.exports = User;