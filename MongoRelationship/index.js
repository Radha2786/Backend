const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.01:27017/relationshipDB').then(()=>{
    console.log('DB Connected');
}).catch((e)=>{
    console.log(e);
})

const userSchema = new Mongoose.Schema({
    name:String,
    age:Number,
    addresses:[
        {
        lane:String,
        city:String,
        state:String,
        Country:String,
    }
]
})
const User = mongoose.model('User',userSchema); 

const MakeUser = async()=>{
    const user = new User({name:'Radha',age:20});
    await user.save()
}