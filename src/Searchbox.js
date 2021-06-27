import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return(
       <div className="pa2">
            <input 
            type="text"
            placeholder="search robots"
            className='pa3 ba b--green bg-lightest-blue'
            onChange={searchChange}
            />
       </div>
       
    );
}

export default Searchbox; 