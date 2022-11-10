const Blogs = require('../models/blogModels')
const mongoose = require('mongoose')

//Get all blogs
const getBlogs = async (req, res) =>{
    const blogs = await Blogs.find({}).sort({createdAt: -1})

    res.status(200).json(blogs)
}

//Get a single blog
const getBlog = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const blogs = await Blogs.findById(id)

    if (!blogs){
        return res.status(404).json({error: 'No blog found :('})
    }

    res.status(200).json(blogs)
}

//Create new blog
const  createBlog = async (req, res) => {
    const {title, blog, image} = req.body

    // Add doc to db
    try{
        const blogs = await Blogs.create({title, blog, image})
        res.status(200).json(blogs)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//Delete a blog
const deleteBlog = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such blog"})
    }

    const blogDelete = await Blogs.findOneAndDelete({_id: id})

    if (!blogDelete){
        return res.status(404).json({error: 'No such blog'})
    }

    res.status(200).json(blogDelete)
}

//Update a blog
const updateBlog = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such blog"})
    }

    //Find the body 
    const update = await Blogs.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    //if there isn't any update then send an error message and end task
    if (!update){
        return res.status(404).json({error: 'No such blog'})
    }

    res.status(200).json(update)
}


module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    deleteBlog,
    updateBlog
}