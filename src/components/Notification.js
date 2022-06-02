import React from 'react'

export const Notification = ({message, nameClass}) => {
    if (message === null) {
        return null
      }
    
      return (
        <div className={nameClass}>
          {message}
        </div>
      )
}
