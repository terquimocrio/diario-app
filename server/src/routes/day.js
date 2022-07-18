const express = require("express")
const daySchema = require("../models/day")

const router = express.Router();

//create day
router.post("/days", (req, res) =>{
  
  const dia = daySchema(req.body)

  dia.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({message : err})
    })
})

//get all days
router.get("/days", (req, res) =>{

  daySchema.find()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({message : err})
    })
})

//get day by id
router.get("/days/:id", (req, res) =>{
  const { id } = req.params;
  daySchema.findById(id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({message : err})
    })
})

//update day
router.put("/days/:id", (req, res) =>{
  const { id } = req.params;
  const { text } = req.body;
  daySchema.updateOne({_id : id}, {$set : {text: text}})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({mensaje : err})
    })
})

//delete day
router.delete("/days/:id", (req, res) =>{
  const { id } = req.params;
  daySchema.deleteOne({_id : id})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({mensaje : err})
    })
})

module.exports = router;