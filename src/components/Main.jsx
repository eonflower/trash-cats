import React, {useContext} from "react";
import { ThemeContext } from "../themeContext";

export default function Main() {
    const {color} = useContext(ThemeContext)

    return (
        <div className={`main-container ${color}-main`}>
            
        </div>
    )
}