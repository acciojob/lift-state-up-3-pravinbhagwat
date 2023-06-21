import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

function Parent() {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className='parent'>
            <h1>Parent Component</h1>
            <Child1 setSelectedOption={setSelectedOption} />
            <Child2 setSelectedOption={setSelectedOption} />
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}

export default Parent