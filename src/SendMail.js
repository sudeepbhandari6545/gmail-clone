import React from 'react'

//icons
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import './Sendmail.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { db } from './firebase'
import firebase from 'firebase'

function SendMail() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (formData) => {
    console.log(formData)
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  }
  return (
    <>
      <div className="sendMail">
        <div className="sendMail_header">
          <h3>New Message</h3>
          <CloseIcon
            onClick={() => dispatch(closeSendMessage())}
            className="sendmail_close"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            placeholder="To"
            type="email"
            {...register('to', { required: true })}
          />
          {errors.to && <p className="sendMail_error">To is Required</p>}

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register('subject', { required: 'subject' })}
          />
          {errors.subject && (
            <p className="sendMail_error">Subject is Required</p>
          )}

          <input
            name="message"
            placeholder="Message.."
            type="text"
            className="sendMail_messages"
            {...register('message', { required: true })}
          />
          {errors.message && (
            <p className="sendMail_error">Message is Required</p>
          )}

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
