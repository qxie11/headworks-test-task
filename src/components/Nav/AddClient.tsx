import React from 'react';
import { Link } from 'react-router-dom';

const AddClient: React.FC = () => {
  return (
    <Link className="main__add" to="/registration">
      <p className="main__add-plus">+</p>
    </Link>
  )
}

export default AddClient;
