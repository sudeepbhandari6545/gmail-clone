import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openSensMessage: (state) => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false
    },
  },
})

export const { openSensMessage, closeSendMessage } = mailSlice.actions

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen

export default mailSlice.reducer
