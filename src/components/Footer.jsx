import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun as darkFaSun } from "@fortawesome/free-solid-svg-icons";
import { faSun as lightFaSun } from "@fortawesome/free-regular-svg-icons";
import { ThemeContext } from "../themeContext";

export default function Footer() {
    const {color, toggleTheme} = useContext(ThemeContext)
    const iconTheme = color === "light" ? darkFaSun : lightFaSun

    return (
        <div className={`footer-container ${color}-theme`}>
            <button onClick={toggleTheme} className={`theme-toggle ${color}-toggle`}><FontAwesomeIcon className={`${color}-icon`} icon={iconTheme} /></button>
        </div>
    )
}