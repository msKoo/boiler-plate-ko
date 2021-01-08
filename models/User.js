const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxLength:50
    },
    email:{
        type:String,
        trim: true,
        unique:1
    },
    lastname:{
        trpe:String,
        maxlength:50
    },
    role:{
        type:Number, //0 유저, 1 관리자
        default:0
    },
    image:String,
    token:{
        type: String
    },
    tokenExp:{
        type:Number
    }
})

const User = nomgoose.model('User', userSchema)

module.exports = { User }