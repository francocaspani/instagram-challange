const Post = require('../models/post')
const crypto = require('crypto')
const path = require('path')

const postControllers = {
    getPosts: async (req, res) => {
        let posts
        let error = null
        try {
            posts = await Post.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { posts },
            success: error ? false : true,
            error: error
        })
    },
    getOnePost: async (req, res) => {
        const id = req.params.id
        let post
        let error = null
        try {
            post = await Post.findOne({ _id: id })
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { post },
            success: error ? false : true,
            error: error
        })
    },
    addPost: async (req, res) => {
        const { image, text, likes } = req.body.newPost
        let post
        let error = null
        try {
            post = await new Post({
                image,
                text,
                likes
            }).save()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { post },
            success: error ? false : true,
            error: error
        })
    },
    modifyPost: async (req, res) => {
        const id = req.params.id
        const post = req.body.postData
        let postdb
        let error = null
        try {
            postdb = await Post.findOneAndUpdate({ _id: id }, post, { new: true })
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { postdb },
            success: error ? false : true,
            error: error
        })
    },
    removePost: async (req, res) => {
        const id = req.params.id
        let post
        let error = null
        try {
            post = await Post.findOneAndDelete({ _id: id })
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { post },
            success: error ? false : true,
            error: error
        })
    },
    uploadImage: async (req, res) => {
        const { file } = req.files
        let imageUrl
        let error = null
        if (file.mimetype.includes('image') || file.mimetype.includes('video')){
            try {
                const fileName = crypto.randomBytes(10).toString('hex') + '.' + file.name.split('.')[file.name.split('.').length - 1]
                const ruta = path.resolve('image', fileName)
                file.mv(ruta, err => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('file uploaded')
                    }
                })
                imageUrl = `http://localhost:4000/${fileName}`
            } catch (err) { error = err }
            res.json({
                response: error ? 'ERROR' : { imageUrl },
                success: error ? false : true,
                error: error
            })
        } else {
            res.json({
                response: 'ERROR',
                success: false ,
                error: 'Tipo de archivo incorrecto'
            })
        }
    }
}


module.exports = postControllers