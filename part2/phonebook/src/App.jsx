import { useState } from 'react'

const Filter = ({search, handleChange})=>
{
  return (
    <form>
        <label htmlFor="search">search:</label>
        <input type="search" id="search" value={search} onChange={handleChange} />
    </form>
  )
}

const PersonForm = ({handleSubmit, newName, newNumber, handleChangeForName, handleChangeForNumber})=>
{
  return(
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChangeForName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleChangeForNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

const Person = ({person})=>{
  return <p>{person.name} {person.number}</p>
}

const Persons = ({persons})=>
{
  return(
    <>
      {persons.map((person)=>(<Person key={person.name} person={person}/>))}
    </>
  )
}
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
      <Filter search={search} handleChange={searching}/>
      <PersonForm newName={newName} 
                  newNumber={newNumber} 
                  handleSubmit={sumit} 
                  handleChangeForName={(e)=> setNewName(e.target.value)} 
                  handleChangeForNumber={(e)=> setNewNumber(e.target.value)}/>
      
      <h2>Numbers</h2>
      <Persons persons={newPersons}/>
      
    </div>
  )
}

export default App