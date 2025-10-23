import {createContext, useContext, useState, useEffect} from 'react'

const themeContext = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark")
      useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export function useTheme() {
  return useContext(themeContext);
}