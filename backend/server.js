const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const port=3019;

const app=express();
const reactDir = path.join(__dirname, '../project_1_react', 'build');

// Serve static files from the React app
app.use(express.static(reactDir));
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/contact');
const db=mongoose.connection;
db.once('open',()=>{
    console.log("connection successfull");
});

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    message:String
});

const users=mongoose.model("data",userSchema);  

// Serve the React app's index.html on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(reactDir, 'index.html'));
});

app.post('/post',async(req,res)=>{
    const {name,email,message}=req.body;
    const User=new users({
        name,
        email,
        message
    })
    await User.save();
    console.log(User)
   
});

app.listen(port,()=>{
    console.log("server started");
});
