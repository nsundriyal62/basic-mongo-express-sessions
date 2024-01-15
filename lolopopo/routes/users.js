// install mongodb
// install mongoosejs
// require and setup connection
// make scehema 
// create model
// export

const mongoose= require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/cheeme");// creating database


// below shows tha data of each doucment
const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
})

//mongoose.model(name,schema_collection_ka);
module.exports = mongoose.model("user",userschema);//--------------->creates collection