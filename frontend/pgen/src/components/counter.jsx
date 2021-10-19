import React from 'react'
import {useState, useEffect} from 'react'

const Counter = () => {

    const [num, setnum] = useState(0)

    const addnum = () => {
        setnum(num+1)
    }

    useEffect(() => {
        document.title = `Você clicou ${num} vezes.`
    }, [num])

    return (
        <div>
            <p>{num}</p>
            <button onClick={addnum}>Add num</button>
        </div>
    )
}

export default Counter