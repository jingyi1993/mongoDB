// const MongoClient = require('mongodb').MongoClient;
//the same as above
const {MongoClient, ObjectID} = require('mongodb');


console.log(ObjectID());
// var user ={name:'Andrew',age:25};
// var {name}= user;
// console.log(name);

//mongoDb module v2
//1st argument is a url,2nd is a callback function
MongoClient.connect('mongodb://localhost:27017/Users',
    (err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
        //return the console and stop
    }
    console.log('Connected to mongodb server');
    // db.collection('Todos').insertOne({
    //    text:'something to do',
    //    completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert',err)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
        db.collection('Users').insertOne({
            name:'Jingyi',
            age:'24',
            location:'Ottawa'
        },(err,result)=>{
            if(err){
                return console.log('unable to insert',err)
            }
            console.log(result.ops[0]._id.getTimestamp());
        });
    db.close();

});
