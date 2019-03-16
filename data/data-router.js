const express = require('express');
const Posts = require('./db.js');
const router = express.Router();
router.use(express.json());

//GET

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  } catch (error) {

    // log error to database
    console.log(error);
    res.status(500).json({error: "The posts information requested could not be retrieved."});
  }
});

//Get by id

router.get('/:id', async (req, res) => {
    try {
      const post = await Posts.findById(req.params.id);
  
      if (post) {
        res.status(200).json(post);
      } 
      
      else {
        res.status(404).json({ message: "The post with this specified ID does not exist." });
     }

    } catch (error) {

      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'The post information requested could not be retrieved.',
      });
    }
  });

  //DELETE

router.delete('/:id', async (req, res) => {
  try {
    const post = await Posts.remove(req.params.id);
    if (post > 0) {
      res.status(200).json({ message: "This post has been removed" });
    } else {
      res.status(404).json({ message: "The post with this specified ID does not exist."  });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "This post could not be removed" ,
    });
  }
});


module.exports = router; 