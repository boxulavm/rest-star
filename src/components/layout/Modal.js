import React from 'react'

const modalCss = {
    backgroundColor: 'rgba(0,0,0,0.8)'
};

const Modal = () => {
    return (
        <div className="modal d-block" style={modalCss}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button className="close">
                        <span>&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary">Save changes</button>
                        <button className="btn btn-secondary" >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
