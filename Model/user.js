const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const userSchema = new Schema({
    userName:  {type:String,required:true},
    userEmail: {type:String,required:true},
    userPassword: {type:String,required:true},
    userRole: {
        type: String,
        enum : ['SuperAdmin', 'ProjectManager','User'],
        default: 'User'
    }
},{
    versionKey:false
});
module.exports = mongoose.model("user",userSchema);