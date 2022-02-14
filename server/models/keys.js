const mongoose = require('mongoose');
const keysSchema = mongoose.Schema({
    path:{type:String,required:true}

});
const key = mongoose.model("keys", keysSchema);
module.exports = key;