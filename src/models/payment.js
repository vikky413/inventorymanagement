const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const paymentSchema = new Schema({
 
    cname : {
        type:String,
        required:true,
    },
    user :{
        type:String,
        required:true
    },
    price : {
        type:Number,
        required:true
    },
    tid : {
        type : Number,
        required:true,
    }, 
    pid : {
        type:Number,
        required:true
    },
    time : {
        type:Date,
        required:true
    }
});

// Compile model from schema
const Payment = mongoose.model("paymentModel", paymentSchema);
module.exports = Payment
