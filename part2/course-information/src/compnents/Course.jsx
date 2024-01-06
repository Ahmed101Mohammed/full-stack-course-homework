const Header = (props)=>
{
  return (<h2>{props.course.name}</h2>)
}

const Part = (props)=>
{
  return(
    <p>
        {props.part.name} {props.part.exercises}
    </p>
  )
}
const Content = ({parts})=>
{

  return (
    <>
      {parts.map((part)=> <Part key={part.id} part={part}/>)}
    </>
  )
}

const Total = ({parts})=>
{
  return(<p>total of {parts.reduce((total, part)=> total + part.exercises, 0)} exercises</p>)
}

const Course = ({course})=>
{
  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
  </div>
  )
}

export default Course;