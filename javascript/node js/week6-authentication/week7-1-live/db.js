const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;
const user=new Schema({
    email:String,
    password:String,
    name:String
})

const Todo=new Schema({
    title:String,
    done:Boolean,
    userId:ObjectId
}) 

const UserModel=mongoose.model('users',User);
const Todomodel=mongoose.model('todos',Todo);

module.exports={
    UserModel:UserModel,
    Todomodel:Todomodel
}
