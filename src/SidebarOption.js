import React from 'react'

//style
import './Sidebaroption.css'

export const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <>
      <div className={`sidebar_option ${selected && 'sidebar_option--active'}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
      </div>
    </>
  )
}
