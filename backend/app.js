const express = require('express');

const app = express();

const mongoose= require('mongoose');

const bodyParser = require('body-parser')
app.use(express.json());

app.use(bodyParser.json()) // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true }))
const hotelRoute = require('./api/routes/hotel');
app.use('/hotel',hotelRoute);


mongoose.connect((
    'mongodb+srv://admin:admin@realmcluster.lnupr.mongodb.net/new?retryWrites=true&w=majority'),

{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }    

).then(app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})
);


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());






