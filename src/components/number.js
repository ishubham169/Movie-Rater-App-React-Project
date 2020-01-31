import React, {useState, useEffect} from 'react';
const Number = () => {
    const [numbers, setNumber] = useState(['one', 'two', 'three']);
    const [letters, setLetter] = useState(['a', 'b', 'c']);

    useEffect( () => {
        console.log('event triggered');
    }, [numbers, letters])
     const addNumber = () => {
    setNumber([...numbers, 'four'])
}
const addLetter = () => {
    setLetter([...letters, 'd'])
}
    return (
        <div>
            <h1>Numbers</h1>
            {numbers.map(num => {
                return <h2>{num}</h2>
            })}
            <button onClick={addNumber}>Add Number</button>
            <h1>Letter</h1>
            {letters.map(letter => {
                return <h2>{letter}</h2>
            })}
            <button onClick={addLetter}>Add Letter</button>
        </div>
        )
}

export default Number