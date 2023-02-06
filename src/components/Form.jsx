import React, { useState, useContext } from "react";
import whiteCat from "../assets/catWhite.png"
import blackCat from "../assets/catBlack.png"
import { ThemeContext } from "../themeContext";

export default function Form() {
    const [formData, setFormData] = useState({
        title: "",
        imgURL: "",
        description: ""
    })

    const {color} = useContext(ThemeContext)
    const catColor = color === "light" ? blackCat : whiteCat
  
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className={`form-container ${color}-form`}>
            <span className="input-span">
            <input
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="name of cat"
                className="input input-title"
            />
            <input
                name="imgURL"
                type="text"
                value={formData.imgURL}
                onChange={handleChange}
                placeholder="image url"
                className="input input-imgUrl"
            />
            <input
                name="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
                placeholder="description"
                className="input input-description"
            />
            </span>
            <span className="button-span">
            <button className={`cat-button ${color}-cat`}><img className="cat-button-img" src={catColor}/></button>
            </span>
            
        </div>
    )
}