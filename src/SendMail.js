import React from 'react'

//icons
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import './Sendmail.css'
import { useForm } from 'react-hook-form'

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <>
      <div className="sendMail">
        <div className="sendMail_header">
          <h3>New Message</h3>
          <CloseIcon className="sendmail_close" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            placeholder="To"
            type="email"
            {...register('to', { required: 'Required' })}
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register('subject', { required: 'Required' })}
          />
          <input
            name="message"
            placeholder="Message.."
            type="text"
            className="sendMail_messages"
            {...register('message', { required: 'Required' })}
          />

          <div className="sendmail_option">
            <Button
              className="sendmail_send"
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SendMail
