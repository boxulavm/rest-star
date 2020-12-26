import React from 'react'

const Header = ({openModal}) => {

    const openModalF = () => {
        openModal();
    }

    return (
        <div className="row mb-4">
            <div className="col-sm-6 mb-1">
                <button onClick={openModalF} className="btn btn-outline-primary px-5"><i className="fas fa-plus"></i> Add post</button>
            </div>
            <div className="col-sm-6">
                <input className="form-control" placeholder="Search posts" disabled></input>
            </div>
        </div>
    )
}


export default Header