import React, {useState} from 'react'

const modalCss = {
    backgroundColor: 'rgba(0,0,0,0.8)'
};

const Modal = ({closeModal, modalType}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = () => {
        console.log('submit '+title+body)
        setTitle('');
        setBody('');
    }

    const onClose = () => {
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
                        <textarea value={body} onChange={e => setBody(e.target.value)} className="form-control" placeholder="Post body" name="body" >{body}</textarea>
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

export default Modal
