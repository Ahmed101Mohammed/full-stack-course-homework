import { useState } from 'react'
const Vote = ({vots})=>
{
  switch (vots)
  {
    case 0:
      return (<p>has No votes</p>);
    case 1:
      return <p>has 1 vote</p>;
    default:
      return <p>has {vots} votes</p>
  }
}

const MostVoted = ({anecdotes, votesRecord})=>
{
  const max = (list, maxi=0, end=0)=>
  {
    if(list.length === end+1)
    {
      return maxi
    }
    else if(list[maxi] > list[end+1])
    {
      return max(list, maxi, end+1)
    }
    else
    {
      maxi = end+1;
      return max(list, maxi, end+1)
    }
  }

  const maximum = max(votesRecord,0,0);
  if(votesRecord[maximum] === 0)
  {
    return(
      <>
        <h2>Anecdote with most votes</h2>
        <p>No Anecdote voted, plase vote one.</p>
      </>
    )
  }
  else
  {
    return(
      <>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[maximum]}</p>
        <Vote vots={votesRecord[maximum]}/>
      </>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const generateRandom = ()=>
  {
    let randomValue = Math.round(Math.random() * 10);
    if(randomValue > 7)
    {
      randomValue %= 7;
    }
    return randomValue
  }

  const [selected, setSelected] = useState(generateRandom());
  const [vots, setVotes] = useState([0,0,0,0,0,0,0,0]);

  const setVote = (select)=>
  {
    let copy = [...vots];
    copy[select] += 1;
    setVotes(copy);
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Vote vots={vots[selected]}/>
      <button onClick={()=>setVote(selected)}>vote</button>
      <button onClick={()=>setSelected(generateRandom())}>next anecdote</button>
      <MostVoted anecdotes={anecdotes} votesRecord={vots}/>
    </div>
  )
}

export default App