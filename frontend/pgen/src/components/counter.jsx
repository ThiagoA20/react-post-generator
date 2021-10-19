import React, { useContext } from 'react'
import {useState, useEffect} from 'react'
import {ThemeContext} from '../App'

const Counter = () => {

    const [num, setnum] = useState(0)

    const addnum = () => {
        setnum(num+1)
    }

    useEffect(() => {
        document.title = `Você clicou ${num} vezes.`
    }, [num])

    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme.dark ? "#333" : "#CCC",
        color: darkTheme.dark ? '#CCC' : "#333",
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <div style={themeStyles}>
            <p>{num}</p>
            <button onClick={addnum}>Add num</button>
        </div>
    )
}

export default Counter