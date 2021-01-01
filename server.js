//routes
// register user endpoint

const express=require('express');
const mongoose=require('mongoose');
const app=express();
const router=express.Router();
const players=require('./model/player.model');
//const mongoDb='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection;

db.on('error',console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(err, resp){
      console.log("Connection Established");
    });



router.get('/Register', function (req, res) {
        players.find().then(players=>res.json(players)).catch(err=>res.status(400).json('Erros'+err));
});

router.post('/newName', function (req, res) {
    const player=new Players(
        {
            name:req.body.name
        }
    )

   player.save().then(result => {
          console.log('player name added');
           res.status(201).json({
            message: "Handling POST requests to Player"
            
          });
    }); 
});

router.get('/GetLeaderboard', function (req, res) {
       
players.find({}).sort({cumulative_points:'desc'}).all((player)=>res.json(player));

});



app.listen(5000,()=>{
    console.log("application is running");
});
