const mongoose = require('mongoose');//requiring mongoose


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main().then(()=>{
    console.log("MongoDb connected");
})
.catch((err)=>{
    console.log(err);
})



//Schema of collection

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

//Model for Schema
const User = mongoose.model("User",userSchema);


// //inserting single data using mongoose
// const user1 = new User({name:"adam",email:"adam@email.com",age:48});
// const user2 = new User({name:"eve",email:"eve@123",age:48});
// user1.save();
// user2.save();


// //inserting Multiple data using mongoose
// User.insertMany([
//     {name:"Peter", age:50, email:"pter@123"},
//     {name:"Parker", age:50, email:"pter@123"},
//     {name:"Tony", age:48, email:"pter@123"},
// ])
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


//Find qeries of mongoos
//findOne()
//find()
//findById('id')


// //Update queries of Mongoose
// User.updateOne({name:"Tony"},{name:"Tony Stark"}).then((res)=>{ //no need to use $set operator.
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })






//Book Schema and Model
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    auther:{
        type:String,
        
    },
    price:{
        type:Number,
        required:true
    },
})


const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({title:"hel",auther:"auther2",price:1234});
book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})