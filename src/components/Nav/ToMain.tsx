import React from 'react'
import { Link } from 'react-router-dom';

const ToMain = () => {
  return (
    <Link className="main__to-main" to="/">
      <p className="main__to-main-text">Main</p>
    </Link>
  )
}

export default ToMain;