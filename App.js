import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick} >{text} </button>
  )
}

const Header = () => <h1>Give Feedback</h1>;

const HeaderStats = () => <h1>Statistics</h1>;

const Statistic = (props) => {
  return(
    <div>
      <table>
        <tbody>
        <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
    </tbody>
    </table>
    </div>
  
  )
}



const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  
  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleBadClick = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = (good + neutral - bad)/total;
  const positive = good/total;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
      <Header />
      <Button handleClick={handleGoodClick} text='good'  />
      <Button handleClick={handleNeutralClick} text='neutral'  />
      <Button handleClick={handleBadClick} text='bad'  />
      <HeaderStats />
      <div>No feedback given</div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text='good'  />
      <Button handleClick={handleNeutralClick} text='neutral'  />
      <Button handleClick={handleBadClick} text='bad'  />
      <HeaderStats />
      <Statistic value={good} text='good' />
      <Statistic value={neutral} text='neutral' />
      <Statistic value={bad} text='bad' />
      <Statistic value={total} text='total' />
      <Statistic value={average} text='average' />
      <Statistic value={positive} text='positive' />
    </div>
  )
}

export default App