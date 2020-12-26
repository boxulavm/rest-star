import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { addPost, updatePost,clearSelectedPost } from '../../actions/postsActions'


const modalCss = {
    backgroundColor: 'rgba(0,0,0,0.8)'
};


const Modal = ({closeModal, modalType, addPost, selected, updatePost, clearSelectedPost}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if(selected){
            setTitle(selected.title)
            setBody(selected.body)
        }
    }, [selected])

    const onSubmit = () => {

        if(modalType === 'Add'){

            const post = {
                title: title,
                body: body
            }

            addPost(post)
            
        } else {

            const post = {
                id: selected.id,
                title: title,
                body: body,
                userId: selected.userId
            }

    
            updatePost(post)
            clearSelectedPost()
    
        }

        setTitle('');
        setBody('');
        closeModal();
    }

    const onClose = () => {
        clearSelectedPost()
        setTitle('');
        setBody('');
        closeModal();
    }

    return (
        <div className="modal d-block" style={modalCss}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">{modalType} post</h5>
                    <button className="close">
                        <span onClick={onClose}>&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <input value={title} onChange={e => setTitle(e.target.value)} className="form-control mb-2" placeholder="Post title" name="title" ></input>
                        <textarea  rows="7"  value={body} onChange={e => setBody(e.target.value)} className="form-control" placeholder="Post body" name="body" >{body}</textarea>
                    </div>
                    <div className="modal-footer">
                        <button onClick={onSubmit} className="btn btn-primary">Save changes</button>
                        <button onClick={onClose} className="btn btn-secondary" >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    selected: state.post.selected
})

export default connect(mapStateToProps, { addPost,updatePost,clearSelectedPost})(Modal)