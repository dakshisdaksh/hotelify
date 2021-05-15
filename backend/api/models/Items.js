const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({

    _id :{
        type :  String,
        required: false
    } ,
    dist_air :{
        type: Number,
        required: true
    },
    dist_rail :{
        type: Number,
        required: true
    },
    ratings :{
        type: Number,
        required: true
    },
    name :{
        type: String,
        required: false
    },
    expense :{
        type: Number,
        required: true
    },
    availability :{
        type: Boolean,
        required: false
    },
    
})
   
const HotelModel = mongoose.model('newurl',hotelSchema)

module.exports = HotelModel