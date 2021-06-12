import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'

//icons
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

//other
import Section from './Section'
import EmailRow from './EmailRow'

import './Emaillist.css'

function EmailList() {
  return (
    <>
      <div className="email_list">
        <div className="emaillist_setting">
          <div className="emaillist_settingleft">
            <Checkbox />
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <RedoIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="emaillist_settingright">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <IconButton>
              <KeyboardHideIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
        </div>
        <div className="emaillist_section">
          <Section Icon={InboxIcon} title="Primary" color="red" selected />
          <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
          <Section Icon={LocalOfferIcon} title="Primary" color="green" />
        </div>
        <div className="emaillist_list">
          <EmailRow
            title="Twitch"
            subject="Hey fellow Streamer!!!"
            description="This is a test"
            time="10pm"
          />
          <EmailRow
            title="Twitch"
            subject="Hey fellow Streamer!!!"
            description="This is a test"
            time="10pm"
          />
        </div>
      </div>
    </>
  )
}

export default EmailList
