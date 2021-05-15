const express = require('express');
const router =  express.Router(); 
const HotelModel = require('../models/Items');

const mongoose = require('mongoose')  



router.get('/',(req,res)=>{

   HotelModel.find()
    .then((result)=>{
        res.json(result)

    })
    .catch((err)=>{
        console.log(err)
    })
   
})

router.post("/", async(req,res)=>{
    try{
  
		
		const { dist_air, dist_rail,ratings,expense, availability } =req.body
    
	
		const x = await HotelModel.find({dist_air:{$lte: dist_air},dist_rail:{$lte: dist_rail},ratings:{$lte: ratings},expense:{$lte: expense},availability:availability});
		console.log(x);
		res.status(200).json(x);
    }
    catch(e){
        console.log(e);
		res.status(400).json(e);
	}
})
module.exports = router;

