const express = require('express')
const router = express.Router();
var fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");


// Route 1 : Get all the Notes using GET "/api/auth/getuser". Login required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({user : req.user.id});
        res.json(notes);     
    } catch (error) {
        console.error(error.message);
      res.status(500).send("Internal server error!");
    }
})

// Route 2 : Add a new note using POST "/api/auth/addnote". Login required
router.post('/addnote', fetchUser, [
    body("title", "Enter a valid title!").isLength({ min: 3 }),
    body("description", "Description must at least 5 characters!").isLength({ min: 5,}),  ], async (req, res) => {
    try{

       
    const { title, description, tag} = req.body;
   // if there are errors, return Bad request and errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   const note = new Notes({
       title, description, tag, user: req.user.id
   })
    const savedNote = await note.save()

   res.json(savedNote)
    } catch (error){
        console.error(error.message);
        res.status(500).send("Internal server error!");
    }

})

module.exports = router