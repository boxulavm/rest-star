import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import PostItem from '../Posts/PostItem'
import { getPosts } from '../../actions/postsActions'

const Posts = ({ post: { posts, loading }, getPosts, openUpdateModal }) => {

    useEffect(() => {
      getPosts();
      // eslint-disable-next-line
    }, [])

    if(loading || !posts){
        return <Spinner />
    }

    return (
        <div>
        <h3>Posts</h3>
            {!loading && posts.length === 0 ? (<p>No posts!</p>) : (
                posts.map(post => <PostItem openUpdateModal={openUpdateModal} key={post.id} post={post} /> )
            )}
       </div>
    )
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)