import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState("");
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

  const newPersons = persons.filter((person)=> person.name.slice(0, search.length).toLowerCase() === search.toLowerCase());
  
  const searching = (e)=>
  {
    setSearch(e.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <label htmlFor="search">search:</label>
        <input type="search" id="search" value={search} onChange={searching} />
      </form>

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
      {newPersons.map((person)=>(<p key={person.name}>{person.name} {person.number}</p>))}
    </div>
  )
}

export default App