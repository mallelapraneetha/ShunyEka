const express = require('express');
const mongoose = require('mongoose');
const Users = require('./users');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors({origin:"*"}))

mongoose.connect('mongodb+srv://phani:Nanikiru7@cluster0.9kcqtli.mongodb.net/?retryWrites=true&w=majority').then(
    ()=>console.log('DB Connected.')
).catch(err=>console.log(err))

app.post('/addUser',async (req,res) => {
    const {name,email,phone} = req.body;
    try{
        const newDate = new Users({name,email,phone});
        await newDate.save();
        return res.json(await Users.find())
    }catch(err){
        console.log(err.message);
    }
})

app.get('/getAllUsers',async(req, res)=>{
    try{
        let data = await Users.find();
        res.json(data);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.get('/getAllUsers',async(req, res)=>{
    try{
        let data = await Registeruser.find();
        res.json(data);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.put('/updateUser/:id', async(req, res)=> {
    const {name,email,phone} = req.body;
    try {
        const newDate = {name,email,phone};
        await Users.findByIdAndUpdate(req.params.id,newDate)
        return res.json(await Users.find())
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
  })

app.delete('/deleteUser/:id',async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id)
        return res.json(await Users.find())
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})



app.listen(4000,()=>console.log('Server Running....'))