const initialState = {
    posts:[],
    post:[],
    newPost: []
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'getPosts':
            return{
                ...state,
                posts: action.payload,
            }
        case 'getOnePost':
            return{
                ...state,
                post: action.payload
            }
        case 'addPost':
            return{
                ...state,
                newPost: action.payload
            }
        default:
            return state
    }
}

export default postsReducer