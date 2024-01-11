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

export default Persons;