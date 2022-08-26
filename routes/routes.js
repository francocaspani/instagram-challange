const Router = require('express').Router();

const postControllers = require('../controllers/postControllers');
const {getPosts, getOnePost, addPost, modifyPost, removePost} = postControllers

Router.route('/posts')
.get(getPosts)
.post(addPost)

Router.route('/posts/:id')
.delete(removePost)
.put(modifyPost)
.get(getOnePost)

module.exports = Router