const mongoose=require("mongoose"); //import mongoose

//create body model / collection

const ExampleSchema=new mongoose.Schema({
  title:String,
  year: Number,
  time: Number,
  language: String,
  date: String,
  country: String,
  director:[
    {
      name: String,
      lastname: String
    }
  ],
  genres:[
    {
      kind: String
    }
  ],
  actor: [
    {
        name: String,
        lastname: String,
        gender: String
    }
  ],
});

//export mongose collection to use in routes
module.exports=mongoose.model("<insert your collection name here>",ExampleSchema);
