var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookCollection = new Schema ({
    name:String,
    author:String,
    price:Number
});

var smodel=mongoose.model('bookinfo',BookCollection);
module.exports=smodel;