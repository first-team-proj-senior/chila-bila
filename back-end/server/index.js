const express = require("express");
const cors = require('cors')
const { getOneUser,getAllAnnounces ,getAllusers, saveAnnounceinDB , removeAnnounc , updateAnnounce, addUser,}= require('../database/index.js')
const bcrypt=require("bcrypt")
const { createTokens, validateToken } = require("./JWT.js");
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// requests for login and sign up :

//1) Post request for signing up:
app.post("/api/SignUp", (req,res) => {

  const {username,email,password}=req.body;
  bcrypt.hash(password, 10).then((hash)=>{
    addUser({
      username:username,
      email:email,
      password:hash,
    }).then(()=>{
      res.json("user registred")
    }).catch((err)=>{
      if(err){
        res.status(400).json({error:err})
      }
    })
  })
  })

  //2) Post request for signing in :
  // Post request for signing in:
 app.post("/api/SignIn" , async (req,res)=>{
  const {username,email,password}=req.body;
  const user = await getOneUser(username);
  if(!user) res.status(400).json({error : "user dosent exist"});
  const dbUser = user[0];
  const dbPassword = dbUser.password;
  bcrypt.compare(password, dbPassword).then((match)=>{
    if(!match){
      res.status(400).json({error: "wrong information"})
    }else {
      res.json("suucess")
    }
  })
 })
  

////////////////////////////////////////////////////////////////////////////
  app.get("/api/users", async (req, res) => {
    try {
     const allusers = await getAllusers()
     res.json(allusers[0])
    } catch (error) {
     res.status(500).send(error)
     console.log(error)
    }
   });

 app.get("/api/announce", async (req, res) => {
  try {
   const allAnnounces = await getAllAnnounces()
   res.json(allAnnounces[0])
  } catch (error) {
   res.status(500).send(error)
   console.log(error)
  }
 });

app.post("/api/announce", async (req,res) => {
try {
  const addedAnnounce = await saveAnnounceinDB(req.body)
  res.status(201).json(addedAnnounce)
} catch (error) {
  res.status(500).send(error)
  console.log(error)
}
})

app.put('/api/announce/:id', async (req,res)=>{
  try {
    const updatedAnnounce = await updateAnnounce(req.body,req.params.id)
    res.json(updatedAnnounce)
  } catch (error) {
    res.status(500).send(error)
    console.log(error)
  }
  })



app.delete('/api/announce/:id', async (req,res)=>{
  try {
    const deletedAnnounce = await removeAnnounc(req.params.id)
    res.json(deletedAnnounce)
    console.log(deletedAnnounce)
  } catch (error) {
    res.status(500).send(error)
    console.log(error)
  }
})



app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
