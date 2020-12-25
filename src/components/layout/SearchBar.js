import React from 'react'

const SearchBar = props => {
    return (
        <div className="row mb-4">
            <div className="col-md-6 mx-auto">
                <input className="form-control" placeholder="Search posts" disabled></input>
            </div>
        </div>
    )
}


export default SearchBar