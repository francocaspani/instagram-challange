import axios from "axios";
import { urlBackend } from "../../App";

const postActions = {
    getPosts: () => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(`${urlBackend}/posts`)
                dispatch({ type: 'getPosts', payload: res.data.response.posts })
            } catch (error) {
                console.log(error)
            }
        }
    },
    getOnePost: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(`${urlBackend}/posts/${id}`)
                dispatch({ type: 'getOnePost', payload: res.data.response.post })
            } catch (error) {
                console.log(error)
            }
        }
    },
    addPost: (newPost) => {
        return async (dispatch, getState) =>{
            try {
                const res = await axios.post(`${urlBackend}/posts`, {newPost})
                dispatch({ type: 'addPost', payload: res.data.response.post })
                return res
            } catch (error) {
                console.log(error)
            }
        }
    },
    modifyPost: (id,postData) =>{
        return async (dispatch, getState) => {
            try {
                const res = await axios.put(`${urlBackend}/posts/${id}`, postData)
            } catch (error) {
                console.log(error)
            }
        }
    },
    removePost: (id)=> {
        return async (dispatch, getState) => {
            try {
                const res = await axios.delete(`${urlBackend}/posts/${id}`)
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default postActions