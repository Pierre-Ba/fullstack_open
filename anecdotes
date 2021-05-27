import React, { useState } from 'react'

const Header = () => <h2>Anecdote of the day</h2>

const WinningAnHeader = () => <h2>Anecdote with most votes</h2>





const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
} 


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const initialArray = Array.apply(null, {length: anecdotes.length}).map(function(){return 0;});
  const [votes, setVotes] = useState(initialArray);
   
  const handleClick = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  
  

  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log(copy);
    
  }

  if (votes === initialArray) {
    return (
      <div>
      <Header />
      <div>
      {anecdotes[selected]}
      </div>
      <Button handleClick={handleVotes} text='vote' />
      <Button handleClick={handleClick} text='next anecdote' />
      <WinningAnHeader />
      <div>You need to vote buddy</div>
    </div> 
    )
  }
  if (votes !== initialArray) {
    let max = Math.max(...votes);
    let index = votes.indexOf(max);
  return (
    <div>
      <Header />
      <div>
      {anecdotes[selected]}
      </div>
      <Button handleClick={handleVotes} text='vote' />
      <Button handleClick={handleClick} text='next anecdote' />
      <WinningAnHeader />
      <div>{anecdotes[index]} has {max} votes</div>
    </div>
    
  )
  }
}

export default App;
