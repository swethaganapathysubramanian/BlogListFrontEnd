import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification, setType } from '../reducers/notificationReducer'
import { Message } from 'semantic-ui-react'

//5.4 5/5
const Notification = ({ notification, type }) => {
  const dispatch = useDispatch()

  dispatch(setNotification(notification))
  dispatch(setType(type))

  const message = useSelector(state => state.notification)
  const typeVal = useSelector(state => state.type)
  //7.19 7.20
  if (typeVal ==='error'){
    return(
      <Message color='red'>
        {message}
      </Message>
    )
  } else if (typeVal === 'notification'){
    return (
      <Message color='green'>
        {message}
      </Message>
    )
  }
  return(
    <div>

    </div>
  )
}

export default Notification