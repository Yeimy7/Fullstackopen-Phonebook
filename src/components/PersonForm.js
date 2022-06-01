import React from 'react'

export const PersonForm = ({addName, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={addName}>
        <div>
          name:
          <input
            type='text'
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            type='text'
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}
