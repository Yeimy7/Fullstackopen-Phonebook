import React from 'react'

export const Persons = ({nameFilter}) => {
  return (
    <div>
    {nameFilter.map(person => <p key={person.name}>{`${person.name} ${person.number}`}</p>)}
  </div>
  )
}
