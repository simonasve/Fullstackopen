import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      phoneNumber: '040-1234567',
    }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const onNameChange = (event) => setNewName(event.target.value)

  const onNumberChange = (event) => setNewNumber(event.target.value)

  const onSubmit = (event) => {
      event.preventDefault()

      if(persons.some(person => person.name === newName))
      {
        window.alert(`${newName} is already added to phonebook`);
        return;
      }
      
      const newPerson = {
        name: newName,
        phoneNumber: newNumber,
      }

      setPersons(persons.concat(newPerson));

      setNewName('');
      setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input 
          value={newName}
          onChange={onNameChange}
          />
        <div>
          number: <input 
          value={newNumber}
          onChange={onNumberChange}
          />
        </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p>{person.name} {person.phoneNumber}</p>)}
    </div>
  )
}

export default App
