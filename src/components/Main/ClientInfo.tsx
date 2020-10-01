import React from 'react';
import { UsersData } from './../../types/global';

interface Props {
  client: UsersData
}

const ClientInfo: React.FC<Props> = ({ client: { name, surname, date } }) => {
  return (
    <div className="main__list-item">
      <h1 className="main__list-name">{`${name} ${surname}`}</h1>
      <p className="main__list-date">{date}</p>
    </div>
  )
}

export default ClientInfo;
