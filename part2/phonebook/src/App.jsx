import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: "201613275978"}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const isPersonExistBefore = (str, arr)=>
  {
    for (let item of arr)
    {
      if(str === item.name)
      {
        return true
      }
    }
    return false;
  }
  const sumit = (e)=>
  {
    e.preventDefault();
    if(isPersonExistBefore(newName, persons))
    {
      alert(`${newName}  is already added to phonebook`)
    }
    else
    {
      setPersons(persons.concat({name: newName, number: newNumber}));
    }
    setNewName("");
    setNewNumber("");
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={sumit}>
        <div>
          name: <input value={newName} onChange={(e)=> setNewName(e.target.value)}/>
        </div>
        <div>number: <input value={newNumber} onChange={(e)=> setNewNumber(e.target.value)}/></div>
        <div>debug: {newNumber}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=>(<p key={person.name}>{person.name} {person.number}</p>))}
    </div>
  )
}

export default App