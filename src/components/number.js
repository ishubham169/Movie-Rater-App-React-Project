import React, {useState} from 'react';
const Number = () => {
    const [numbers, setNumber] = useState(['one', 'two', 'three']);

const addNumber = () => {
    setNumber([...numbers, 'four'])
}
    return (
        <div>
            <h1>Numbers</h1>
            {numbers.map(num => {
                return <h2>{num}</h2>
            })}
            <button onClick={addNumber}>Add Number</button>
        </div>
        )
}

export default Number