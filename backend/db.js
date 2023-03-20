const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://devyanshu:20205065@cluster0.cxhkwof.mongodb.net/teerath?retryWrites=true&w=majority'
const mongoURI = 'mongodb://devyanshu:20205065@ac-swaxonm-shard-00-00.cxhkwof.mongodb.net:27017,ac-swaxonm-shard-00-01.cxhkwof.mongodb.net:27017,ac-swaxonm-shard-00-02.cxhkwof.mongodb.net:27017/teerath?ssl=true&replicaSet=atlas-lfglnp-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async()=> {
    await mongoose.connect(mongoURI,{useNewUrlParser: true}, (err, result)=> {
        if(err){
            console.log("---",err);
        }
        else{
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err, data){
           if(err)console.log(err);
           else console.log();
        })
        }
    });
}

module.exports = mongoDB;
