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
        //deleteMany

        db.collection('Todos').deleteMany({text:'eat lunch'})
            .then((result)=>{
                console.log(result);
            });
        //delete one
        // db.collection('Todos').deleteOne({text:'Eat lunch'})
        //     .then((result)=>{
        //         console.log(result);
        //     });

        //find one and delete
        // db.collection('Todos').findOneAndDelete({completed:false})
        //     .then((result)=>{
        //
        //         console.log(result);
        //     });
        //

        //exercise
        //delete all which name is Jingyi
        db.collection('Users').deleteMany({name:'Jingyi'})
            .then((result)=>{
                console.log(result);
            });

        //exercise
        //delete all which id is...
        db.collection('Users').deleteOne({_id:new ObjectID('5b1ae13e2998060d2548ad25')})
            .then((result)=>{
                console.log(result);
            });

        db.close();


    });