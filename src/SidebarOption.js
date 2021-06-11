import React from 'react'

//style
import './Sidebaroption.css'

export const SidebarOption = ({ Icon, title, number }) => {
  return (
    <>
      <div className="sidebar_option">
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
      </div>
    </>
  )
}
