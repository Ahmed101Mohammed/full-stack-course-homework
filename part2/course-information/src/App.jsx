const Header = (props)=>
{
  return (<h1>{props.course.name}</h1>)
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 20,
        id: 4
      },
      {
        name: 'Flatter',
        exercises: 4,
        id: 5
      }
    ]
  }

  return <Course course={course}/>
}

export default App