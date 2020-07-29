import React from 'react';

function SearchForm(props) {
    return (
        <div id='search-form' className='input-group mb-3'>
            <input className='form-control' name='title' placeholder='Search for a book...' type='text' onChange={props.handleInputChange}></input>
            <div className="input-group-append">
                <button className='btn btn-primary' onClick={props.handleFormSubmit} type='submit'>Search</button>
            </div>
        </div>
    )
}

export default SearchForm;