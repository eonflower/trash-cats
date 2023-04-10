import React, { useState, useContext } from "react";
import whiteCat from "../assets/catWhite.png"
import blackCat from "../assets/catBlack.png"
import { ThemeContext } from "../themeContext";
import axios from "axios";
import config from "../config";

export default function Form(props) {
    const [formData, setFormData] = useState({
        title: "",
        imgUrl: "",
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

    // console.log(props.getData)

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`https://api.vschool.io/${config.CLIENT_ID}/thing`, formData)
        .then(res => {console.log(res.data)})
        .then(res => props.getData())
        setFormData({
            title: "",
            imgUrl: "",
            description: ""
        })
    }



    return (
        <div className="form-container">
            <form id="form" onSubmit={handleSubmit} className={`form-container ${color}-form`}>
            <input
                required
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="name of cat"
                className="input input-title"
            />
            <input
                required
                name="imgUrl"
                type="text"
                value={formData.imgUrl}
                onChange={handleChange}
                placeholder="image url"
                className="input input-imgUrl"
            />
            <input
                required
                name="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
                placeholder="description"
                className="input input-description"
            />
        </form>
        <span className="button-span">
        <button type="submit" form="form" className={`cat-button ${color}-cat`}><img className="cat-button-img" src={catColor}/></button>
        </span>
        </div>
    )
}