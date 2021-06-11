import React from 'react'

//material ui icons and core
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'

//other
import { SidebarOption } from './SidebarOption'
//style
import './Sidebar.css'

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <Button
          startIcon={<AddIcon fontSize="large" />}
          className="sidebar_compose"
        >
          Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
      </div>
    </>
  )
}

export default SideBar
