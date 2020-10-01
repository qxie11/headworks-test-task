import React from 'react'
import { Link } from 'react-router-dom';

const ToAbout = () => {
  return (
    <Link className="main__to-about" to="/about">
      <p className="main__to-about-text">About</p>
    </Link>
  )
}

export default ToAbout
