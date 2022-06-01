import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personsService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([])
  const [nameSearch, setNameSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNameFilter = (e) => {
    setNameSearch(e.target.value)
  }
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  const addName = (e) => {
    e.preventDefault()
    const existName = persons.some(person => person.name === newName)
    if (!existName) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
    else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }
        personsService
          .update(person.id, changedPerson)
          .then(changed => {
            setPersons(persons.map(person => person.name !== newName ? person : changed))
            setNewName('')
            setNewNumber('')
          })
      }
    }
  }

  const deleteName = (id) => {
    personsService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameSearch={nameSearch} handleNameFilter={handleNameFilter} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons nameFilter={persons.filter(person => (person.name.toLocaleLowerCase()).match(nameSearch.toLowerCase()))} deleteName={deleteName} />
    </div>
  );
}

export default App;
