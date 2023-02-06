import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){ 
    
    const [color, setColor] = useState("light")
    
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    const bgColor = color === "light" ? "#fff" : "#242424"

    document.body.style.backgroundColor = bgColor
    
    return(
        <ThemeContext.Provider value={{
            color: color, 
            toggleTheme: toggleTheme
        }}>
           {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}