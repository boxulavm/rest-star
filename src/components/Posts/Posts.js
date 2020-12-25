import React, {useState, useEffect} from 'react'
import Spinner from '../layout/Spinner'
import PostItem from '../Posts/PostItem'

const Posts = () => {

    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      getPosts();
    }, [])

    const getPosts = async () => {
        setLoading(true)

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        setPosts(data.slice(-10))
        setLoading(false)
    }

    if(loading){
        return <Spinner />
    }

    return (
        <div>
        <h3>Posts</h3>
        <ul className="list-group my-2">
            {!loading && posts.length === 0 ? (<p>No posts!</p>) : (
                posts.map(post => <PostItem key={post.id} post={post} /> )
            )}
        </ul>
       </div>
    )
}

export default Posts