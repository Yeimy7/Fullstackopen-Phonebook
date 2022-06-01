import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [nameSearch, setNameSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState(persons)


  const handleNameFilter = (e) => {
    setNameSearch(e.target.value)
    if (e.target.value === '') {
      setNameFilter(persons)
    }
    else {
      setNameFilter(persons.filter(person => (person.name.toLocaleLowerCase()).match(nameSearch.toLowerCase())))
    }
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
      setPersons([...persons, { name: newName, number: newNumber }])
      setNewName('')
      setNewNumber('')
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }


  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameSearch={nameSearch} handleNameFilter={handleNameFilter} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons nameFilter={nameFilter} />
    </div>
  );
}

export default App;
