const mongoose = require('mongoose');
const resultsSchema = mongoose.Schema({
    title:{type:String,required:true},
    displayLink:{type:String,required:true},

    link:{type:String,required:true},
    snippet:{type:String,required:true}



});
const results = mongoose.model("results", resultsSchema);
module.exports = results;