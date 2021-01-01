//schema

const mongoose=require('mongoose');


const Schema=mongoose.Schema;


const playerSchema=new Schema({
  name:{ 
      type:String,
      required: true
      },
  wins:{ 
      type:Number
      },
  cumulative_points:{ 
      type:Number
      }
})

//const players=mongoose.model('players',player);
module.exports=mongoose.model('players',playerSchema);