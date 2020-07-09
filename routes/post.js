const express = require("express")
const Post = require('../models/Post')
const router = express.Router()

// RETRIEVE ALL POSTS
router.get('/', async(req, res)=>{
    try{
        const post = await Post.find().sort({title: 1});
        res.json(post)
        console.log(res)
    }catch(error){
        res.json(error)
    }
})

// SUBMITS A POST
router.post('/', async (req, res)=>{
    const postObeject = new Post({
        title: req.body.title,
        description: req.body.description,
        rate: req.body.rate,
        img: req.body.img
    })
    try{
        const savedPost = await postObeject.save()
        res.json(savedPost);
    }catch(error){
        res.json(error)
    }   
})

// GET A SPECIFIC POST
router.get('/:postId', async(req, res)=>{
    try{
        const sPost = await Post.findById(req.params.postId)
        res.json(sPost);
    }catch(error){
        res.json(error)
    }
})  

router.get('/title/:title', async(req, res)=>{
    try{
        const sPost = await Post.find({"title": {$regex: new RegExp('^' + req.params.title), $options: "i"}}, {"title": 1, "img": 1}).limit(10)
        res.json(sPost);
    }catch(error){
        res.json(error)
    }
})  


// Delete post
router.delete('/:postId', async(req, res)=>{
    try{
        const deletedPost = await Post.remove({_id: req.params.postId})
        res.json(deletedPost);
    }catch(error){
        res.json(error)
    }
})

// Update a post
router.patch('/:postId', async(req, res)=>{
    try{
        const patchedPost = await Post.updateOne({_id: req.params.postId}, {
            $set:{
                title: req.body.title
            }
        })
        res.json(patchedPost);
    }catch(error){
        res.json(error)
    }
})

module.exports = router;