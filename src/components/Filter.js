import React from 'react'

export const Filter = ({nameSearch, handleNameFilter}) => {
  return (
    <div>
        filter shown with
        <input
          type='text'
          value={nameSearch}
          onChange={handleNameFilter}
        />
      </div>
  )
}
