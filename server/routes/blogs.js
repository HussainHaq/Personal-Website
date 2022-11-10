const express = require('express')
const {
    createBlog,
    getBlog,
    getBlogs,
    deleteBlog,
    updateBlog
} = require('../controllers/blogControllers')

const router = express.Router()

//GET all workouts
router.get('/', getBlogs)

//GET a single workout
router.get('/:id', getBlog)

//POST a workout
router.post('/', createBlog)


//DELETE a workout
router.delete('/:id', deleteBlog)

//UPDATE a workout
router.patch('/:id', updateBlog)

module.exports = router