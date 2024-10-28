const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log("mongo connected..");
    }).catch((err)=>{
        console.log("Mongo error:",err);
    })
