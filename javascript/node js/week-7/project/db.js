const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;
const UserSchema=new Schema({
    // inf about user. user is one who watches and purachses course from of diff admins from our site
    email:{type:String,unique:true},
    password : String,
    firstname:String,
    lastname:String,
});

const adminSchema=new Schema({
    //inf about admin. admin is one who sells course on our site
    email:{type:String, unique:true},
    password:String,
    firstname:String,
    lastname:String,
})

const courseSchema=new Schema({
    // ye course kiskne banaya he and course details
    title:String, 
    description:String,
    price:Nuumber,
    imageUrl:String,
    createrId:ObjectId
})

const purchaseSchema=new Schema({  //yis user ne ye wala course purchase kiya he 
    userId: ObjectId,
    courseId:ObjectId
});

const UserModel=mongoose.model('users',UserSchema);
const adminModel=mongoose.model('admin',adminSchema);
const courseModel=mongoose.model('course',courseSchema);
const purchaseModel=mongoose.model('purchase',purchaseSchema);

module.exports={
    UserModel,
    adminModel,
    courseModel,
    purchaseModel
}


