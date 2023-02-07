import React, {useState, useContext} from "react";
import { ThemeContext } from "../themeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


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

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
    const toggleShowForm = () => setShowForm((prevState) => !prevState);
    

    

    const handleChange = (e) => { 
        const {name, value} = e.target
        setCard(prevState => {
            return ({
                ...prevState,
                [name]:value
            })
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("yes")
        props.edit(props.id, card)
        toggleShowForm()


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
                <p className={`card-description ${color}-title`}>{card.description}</p>
                 </>}
            
            <div className="d-flex card-nav">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle className={`${color}-btn`} color="black"><FontAwesomeIcon icon={faEllipsis} /></DropdownToggle>
            <DropdownMenu className={`${color}-dropdown`}>
            <DropdownItem onClick={() => {toggleShowForm(), props.edit}}  className={`${color}-dropdown-item edit-button`}>{showForm ? "save" : "edit"}</DropdownItem>
            <DropdownItem onClick={props.delete} className={`${color}-dropdown-item delete-button`}>delete</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            </div>
        </div>
    )
}
