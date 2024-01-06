import { useState } from 'react'

const StatisticLine = ({text, value, postFex})=>
{
  if(postFex !== null)
  {
    return <p>{text} {value} {postFex}</p>
  }
  return <p>{text} {value}</p>
  
}

const Statistics = ({good, neutral, bad})=>
{
  const all = good + bad + neutral;
  if(all === 0)
  {
    return <p>No feedback given</p>
  }
  return (
    <>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="avarage" value={all/3}/>
      <StatisticLine text="positive" value={(good/all)*100} postFex="%"/>
    </>
  )
}

const Button = ({text, onClick}) =>
{
  return(<button onClick={onClick}>{text}</button>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={()=> setGood(good + 1)}/>
      <Button text="neutral" onClick={()=> setNeutral(neutral + 1)}/>
      <Button text="bad" onClick={()=> setBad(bad + 1)}/>
     
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App