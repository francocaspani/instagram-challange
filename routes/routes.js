const Router = require('express').Router();

const postControllers = require('../controllers/postControllers');
const {getPosts, getOnePost, addPost, modifyPost, removePost, uploadImage} = postControllers

Router.route('/posts')
.get(getPosts)
.post(addPost)

Router.route('/posts/:id')
.delete(removePost)
.put(modifyPost)
.get(getOnePost)

Router.route('/upload')
.post(uploadImage)

module.exports = Router