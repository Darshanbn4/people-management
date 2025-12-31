const express=require('express');
const router=express.Router();
const person=require("../models/person");


router.get('/',async(req,res)=>{
    try{
        const people=await person.find();
        res.status(200).json(people);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

router.post('/',async(req, res)=>
    {
    try{
        const newPerson=new newPerson(req.body);
        await newPerson.save();
        res.status(201).json(newPerson);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPerson = await person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await person.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports=router;