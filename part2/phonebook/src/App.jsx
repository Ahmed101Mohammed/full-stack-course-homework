import { useState, useEffect } from 'react'
import phonbookServices from './services/phonbookServices'

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
  const [persons, setPersons] = useState([])
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
      phonbookServices.create({name: newName, number: newNumber})
      .then(data=> setPersons(persons.concat(data)))
      .catch(err => console.log('Failed to create the new person.'))
    }
    setNewName("");
    setNewNumber("");
  }
  useEffect(()=>{
    const promise = phonbookServices.getAll() 
    promise.then(data=>setPersons(data)).catch(err=>console.log("Failed to get the data from server."))
  }, [])
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