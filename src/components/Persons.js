import React from 'react'

export const Persons = ({ nameFilter, deleteName }) => {
  const handleDelete=(id, name)=>{
    if(window.confirm(`Delete ${name}?`)){
      deleteName(id)
    }
  }
  return (
    <div>
      {nameFilter.map(person => <p key={person.id}>{`${person.name} ${person.number}`} <button onClick={()=>handleDelete(person.id, person.name )}>delete</button></p>)}
    </div>
  )
}
