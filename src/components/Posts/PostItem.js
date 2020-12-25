import React from 'react'

const PostItem = ({post}) => {
    return (
        <li className="list-group-item mb-1">{post.title}</li>
    )
}

export default PostItem
