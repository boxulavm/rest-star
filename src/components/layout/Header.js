import React from 'react'

const Header = ({openModal}) => {

    const openModalF = () => {
        openModal();
    }

    return (
        <div className="row mb-4">
            <div className="col-sm-6 mb-1">
                <button onClick={openModalF} className="btn btn-primary px-5"><i className="fas fa-plus"></i> Add post</button>
            </div>
        </div>
    )
}


export default Header