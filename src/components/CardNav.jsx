import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { ThemeContext } from '../themeContext';

function Example(props) {
    const {color} = useContext(ThemeContext)

 

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className={`${color}-btn`} color="black"><FontAwesomeIcon icon={faEllipsis} /></DropdownToggle>
        <DropdownMenu className={`${color}-dropdown`}>
          <DropdownItem onClick={props.edit} className={`${color}-dropdown-item edit-button`}>edit</DropdownItem>
          <DropdownItem onClick={props.delete} className={`${color}-dropdown-item delete-button`}>delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Example;