import React from 'react';

function SearchBox({ searchChange }) {
    // console.log('SearchBox');
    return (
        <div className='p-1'>
            <input 
                aria-label='Search'
                className='p-1 text-success' 
                type='search' 
                placeholder='search...'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;