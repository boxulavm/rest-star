import React from 'react'
import { connect } from 'react-redux'
import { deletePost, selectedPost } from '../../actions/postsActions'

const PostItem = ({post, deletePost, openUpdateModal, selectedPost }) => {


    let disabled = '';

    if(post.id > 100){
        disabled = 'disabled';
    }

    const onDelete = () => {
        deletePost(post.id)
    }

    const onUpdate = () => {

        openUpdateModal()
        selectedPost(post)

    }

    return (
        <div className="card mb-1">
            <div className="card-body">
                <p className="card-title lead">{post.title}</p>
                <p>{post.body}</p>
                <div className="float-right">
                    <button onClick={onUpdate} disabled={disabled}  className="btn btn-outline-info btn-small" title="Update" ><i className="fa fa-pen"></i></button>
                    <button onClick={onDelete} className="btn btn-outline-danger btn-small ml-3"  title="Delete" ><i className="fa fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { deletePost,selectedPost })(PostItem)