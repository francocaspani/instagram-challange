const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image: { type: String, required: true },
    text: { type: String },
    likes: { type: Number }
})

const Post = mongoose.model('post', postSchema)
module.exports = Post