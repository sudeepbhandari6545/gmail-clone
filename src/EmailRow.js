import React from 'react'

//meterial ui parts
import { Checkbox, IconButton } from '@material-ui/core'

//icons
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'

//style
import './Emailrow.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from './features/mailSlice'

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory()
  const dispatch = useDispatch()

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      }),
    )
    history.push('/mail')
  }

  return (
    <>
      <div onClick={openMail} className="emailRow">
        <div className="emailrow_option">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
        <h3 className="emailrow_title">{title}</h3>
        <div className="emailrow_message">
          <h4>
            {subject}
            {''} {''}
            <span className="emailrow_description">-{description}</span>
          </h4>
        </div>
        <p className="emailrow_time">{time}</p>
      </div>
    </>
  )
}

export default EmailRow
