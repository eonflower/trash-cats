import React, {useContext} from "react";
import lightTrash from "../assets/trash.png"
import darkTrash from "../assets/trashWhite.png"
import { ThemeContext } from "../themeContext";

export default function Header() {
    const {color} = useContext(ThemeContext)

    const trashColor = color === "light" ? lightTrash : darkTrash

    return (
        <div className={`header-container ${color}-header`}>
            <img className="trash-logo" src={trashColor} style={{height: "100px"}} alt="trash logo" />
            <span className="title-container">
            <h2 className={`page-title ${color}-title`}>Trash Cats</h2>
            <p className={`page-subtitle ${color}-title`}>submit your trashiest cats</p>
            </span>
        </div>
    )
}