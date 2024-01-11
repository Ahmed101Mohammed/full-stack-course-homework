import { useState, useEffect } from 'react'
import phonbookServices from './services/phonbookServices'

const Notification = ({message})=>
{
  if(!message.content)
  {
    return null;
  }

  return (<div className={message.styleClass}>{message.content}</div>)
}
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

const Person = ({person, handleRemoving})=>{
  return <li>{person.name} {person.number} <button onClick={handleRemoving}>Delete</button></li>
}

const Persons = ({persons, handleRemove})=>
{
  return(
    <>
      {persons.map((person)=>(<Person key={person.id} person={person} handleRemoving={()=>handleRemove(person.id, person.name)}/>))}
    </>
  )
}
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState({content:null, styleClass:''})
  const isPersonExistBefore = (str, arr)=>
  {
    for (let item of arr)
    {
      if(str === item.name)
      {
        return item
      }
    }
    return false;
  }

  const updatePerson = (item)=>
  {
    phonbookServices.update(item.id, {...item, number:newNumber})
    .then(data => {
      const updatedPhonebook = persons.map(person => person.id==item.id? data : person)
      setPersons(updatedPhonebook)
    })
    .catch(err=>console.log("Failed to update", item.name, "number"))
  }
  const sumit = (e)=>
  {
    e.preventDefault();
    const isPersonAlreadyExist = isPersonExistBefore(newName, persons);
    if(isPersonAlreadyExist)
    {
      window.confirm(`${newName} is already added to phonebook, repleace the old number with the new number?`)? updatePerson(isPersonAlreadyExist):null;
    }
    else
    {
      phonbookServices.create({name: newName, number: newNumber})
      .then(data=> {
        setPersons(persons.concat(data))
        setMessage({content:`Added ${data.name}`,styleClass:'add'})
        setTimeout(()=> setMessage({content:null, styleClass:""}),3000)
      })
      
      .catch(err => console.log('Failed to create the new person.'))
    }
    setNewName("");
    setNewNumber("");
  }
  
  const removePerson = (id, name)=>
  {
    if(window.confirm(`Delete ${name} ?`)) 
    {
      phonbookServices.remove(id)
      .then(data => {
        const remainPersons = persons.filter(person=>person.id !== data.id)
        setPersons(remainPersons)
      })
      .catch(err=>{
        setMessage({content:`Information of ${name} has already been removed from server`, styleClass:'failed-removing'})
        setTimeout(()=> setMessage({content:null, styleClass:""}),3000)
      })
    }
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
      <Notification message={message} />
      <Filter search={search} handleChange={searching}/>
      <PersonForm newName={newName} 
                  newNumber={newNumber} 
                  handleSubmit={sumit} 
                  handleChangeForName={(e)=> setNewName(e.target.value)} 
                  handleChangeForNumber={(e)=> setNewNumber(e.target.value)}/>
      
      <h2>Numbers</h2>
      <Persons persons={newPersons} handleRemove={removePerson} />
      
    </div>
  )
}

export default App