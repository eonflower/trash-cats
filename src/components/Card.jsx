import React, {useState, useContext} from "react";
import axios from "axios";
import config from "../config";
import { ThemeContext } from "../themeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import { faComment } from "@fortawesome/free-regular-svg-icons";
// import Comments from "./Comments";


export default function Card(props) {
    const {color} = useContext(ThemeContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showForm, setShowForm] = useState(false)

    const [card, setCard] = useState({
        title: props.title,
        imgUrl: props.imgUrl,
        description: props.description,
        id: props.id
    })

    const [comment, setComment] = useState("")

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
    const toggleShowForm = () => setShowForm((prevState) => !prevState);
    

    const updateCard = (id, card) => {
        axios.put(`https://api.vschool.io/${config.CLIENT_ID}/thing` + id, card)
        .then(res => console.log("edited"))
    }

    const handleChange = (e) => { 
        const {name, value} = e.target
        setComment(prevState => props.comment)
            
        setCard(prevState => {
            return ({
                ...prevState,
                [name]:value
            })
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateCard(card.id, card)

    }



    return (
        <div className={`card-container ${color}-card`}>
            <img src={card.imgUrl} className="card-img" alt="" />

            {showForm ? 
            <form className="edit-form" onSubmit={handleSubmit}>
                <label className={`${color}-label`}>name of cat</label>
                <input
                    required
                    name="title"
                    type="text"
                    value={card.title}
                    onChange={handleChange}
                    placeholder="name of cat"
                    className="input-edit input-title"
                />
                <label className={`${color}-label`}>description</label>
                <input
                    required
                    name="description"
                    type="text"
                    value={card.description}
                    onChange={handleChange}
                    placeholder="description"
                    className="input-edit input-description"
                />

                </form>
                :
                <>
                
                <h2 className={`card-title ${color}-title`}>{card.title}</h2>
                <p className={`card-description ${color}-description`}>{card.description}</p>
                {/* <hr /> */}
                {/* <Comments /> */}
                </>}
            
            <div className="d-flex card-nav">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle className={`${color}-btn`} color="black"><FontAwesomeIcon icon={faEllipsis} /></DropdownToggle>
            <DropdownMenu className={`${color}-dropdown`}>
            <DropdownItem onClick={(e) => {toggleShowForm(), handleSubmit(e)}}  className={`${color}-dropdown-item edit-button`}>{showForm ? "save" : "edit"}</DropdownItem>
            <DropdownItem onClick={props.delete} className={`${color}-dropdown-item delete-button`}>delete</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            </div>

        </div>
    )
}
