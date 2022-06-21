require('dotenv').config();

const mongoose=require('mongoose');

mongoose.connect(process.env.DB).then(()=>console.log('database connected to mongodb')).catch((e)=>console.log(e))