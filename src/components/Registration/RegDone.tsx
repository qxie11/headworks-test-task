import React from 'react'
import { Link } from 'react-router-dom'

const RegDone: React.FC = () => {
  return (
    <div className="registration__done">
      <img className="registration__done-img" src="https://bluemail.help/assets/ic_action_done.png" alt="done" />
      <Link className="registration__done-back" to="/">На Главную</Link>
    </div>
  )
}

export default RegDone;
