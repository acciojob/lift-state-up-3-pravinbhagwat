import React from 'react'

function Child2(props) {
    const {setSelectedOption} = props;
    return (
        <div className='child-2'>
          <h2>Child Component 2</h2>
          <button onClick={(e) => {setSelectedOption(e.target.innerHTML)}}>Option 2</button>
        </div>
    )
}

export default Child2