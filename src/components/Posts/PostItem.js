import React from 'react'

const PostItem = ({post}) => {
    return (
        <div className="card mb-1">
            <div className="card-body">
                <p className="card-title lead">{post.title}</p>
                <p>{post.body}</p>
                <div className="float-right">
                    <button className="btn btn-outline-info btn-small" title="Update" ><i className="fa fa-pen"></i></button>
                    <button className="btn btn-outline-danger btn-small ml-3"  title="Delete" ><i className="fa fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default PostItem
