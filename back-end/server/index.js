const express = require("express");
const cors = require('cors')


const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/announce", async (req, res) => {
 try {
  const allAnnounces = await getAllAnnounces()
  res.json(allAnnounces)
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
    const updatedAnnounce = await updateAnnounce(req.params.id,req.body)
    res.json(updatedAnnounce)
  } catch (error) {
    res.status(500).send(error)
    console.log(error)
  }
  })



app.delete('/api/announce/:id', async (req,res)=>{
  try {
    const deletedAnnounce = await removeAnnounce(req.params.id)
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
