import { GET_POSTS, SET_LOADING, POSTS_ERROR, ADD_POST, DELETE_POST, CLEAR_SELECTED_POST, SELECTED_POST, UPDATE_POST } from '../actions/types'

const initialState = {
    posts: null,
    loading: false,
    error: false
}

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [ action.payload, ...state.posts],
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload),
                loading: false
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post),
                loading: false
            }
        case SELECTED_POST:
            return {
                ...state,
                selected: action.payload,
            }
        case CLEAR_SELECTED_POST:
            return {
                ...state,
                selected: null,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case POSTS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}