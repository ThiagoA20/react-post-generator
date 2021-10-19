import React, { useState, createContext } from 'react'
import Counter from './components/counter'

export const ThemeContext = createContext()

function App() {

  const [darkTheme, setDarkTheme] = useState({
    dark: false,
    lang: 'english'
  })

  function toggleTheme() {
    setDarkTheme({
      dark: !darkTheme.dark,
      lang: darkTheme.lang
    })
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <p>TEsadfojdsajofsajd sadfadsf</p>
        <Counter />
        <button onClick={toggleTheme}>Toggle theme</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
