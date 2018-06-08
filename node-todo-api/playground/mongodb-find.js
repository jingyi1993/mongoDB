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
//use the find method to fetch data from mongodb;
        db.collection('Todos').find().toArray()
        //return a propmise, use .then to catch the promise;
            .then((docs)=>{
            console.log('todos');
            console.log(docs)
        },(err=>{
            console.log('Unable to fetch todos')
            }));


        db.close();

    });