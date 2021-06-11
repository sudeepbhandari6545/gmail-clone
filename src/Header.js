import React from 'react'
//icons
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import './Header.css'

function Header() {
  return (
    <>
      <div className="header">
        <div className="header_left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
            alt=""
          />
        </div>
        <div className="header_middle">
          <SearchIcon />
          <input type="text" placeholder="search" />
          <ArrowDropDownIcon className="dropdown_icon" />
        </div>
        <div className="header_right"></div>
      </div>
    </>
  )
}

export default Header
