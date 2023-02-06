import React, {useContext} from "react";
import { ThemeContext } from "../themeContext";

export default function Card() {
    const {color} = useContext(ThemeContext)

    return (
        <div className="card-container">
            
        </div>
    )
}