import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const sumit = (e)=>
  {
    e.preventDefault();
    setPersons(persons.concat({name: newName}));
    setNewName("");
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={sumit}>
        <div>
          name: <input value={newName} onChange={(e)=> setNewName(e.target.value)}/>
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=>(<p key={person.name}>{person.name}</p>))}
    </div>
  )
}

export default App