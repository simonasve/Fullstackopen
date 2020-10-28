import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistic = (props) => (
  <div>
    <p>{props.text} {props.value} {props.percent}</p>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = () => (good + bad + neutral)
  const average = () => ((good - bad) / total())
  const positive = () => ((100/total())*good)

  if(good === 0 && neutral === 0 && bad === 0) {
    return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h2>statistics</h2>
      <table striped bordered hover>
        <tbody>
          <tr>
            <td><Statistic text="good"/></td>
            <td><Statistic value={good}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statistic text="neutral"/></td>
            <td><Statistic value={neutral}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statistic text="bad"/></td>
            <td><Statistic value={bad}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statistic text="all"/></td>
            <td><Statistic value={total()}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statistic text="average"/></td>
            <td><Statistic value={average()}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statistic text="positive"/></td>
            <td><Statistic value={positive()} percent="%"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)