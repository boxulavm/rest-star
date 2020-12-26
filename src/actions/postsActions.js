import { GET_POSTS, SET_LOADING, POSTS_ERROR, ADD_POST, DELETE_POST, SELECTED_POST, CLEAR_SELECTED_POST, UPDATE_POST} from './types'

export const getPosts = () => async dispatch => {

    try {

        setLoading();

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
    
        dispatch({
            type: GET_POSTS,
            payload: data.slice(-10)  
        })

    } catch (error) {

        dispatch({
            type: POSTS_ERROR,
            payload: error.response.data 
        })

    }

}

export const addPost = (post) => async dispatch => {

    try {

        setLoading();

        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body,
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
        const data = await res.json()

        console.log(data)
    
        dispatch({
            type: ADD_POST,
            payload: data  
        })

    } catch (error) {

        dispatch({
            type: POSTS_ERROR,
            payload: error.response.data 
        })

    }

}

export const deletePost = id => dispatch => {

    try {

        setLoading();

        // await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        //     method: 'DELETE',
        // });
    
        dispatch({
            type: DELETE_POST,
            payload: id
        })

    } catch (error) {

        dispatch({
            type: POSTS_ERROR,
            payload: error.response.data 
        })

    }

}

export const updatePost = (post) => async dispatch => {

    try {

        setLoading();

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
        const data = await res.json()
    
        dispatch({
            type: UPDATE_POST,
            payload: data 
        })


    } catch (error) {

        dispatch({
            type: POSTS_ERROR,
            payload: 'Sometnig is wrong!'
        })

    }

}

export const selectedPost = post => {
    return {
        type: SELECTED_POST,
        payload: post
    }
}

export const clearSelectedPost = () => {
    return {
        type: CLEAR_SELECTED_POST
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}