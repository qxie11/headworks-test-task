import React from 'react';
import axios from 'axios';
import moment from "moment";
import { UsersData, Sex, ProgramOfLoyalty } from './../../types/global/index';
import RegDone from './RegDone';

interface State extends Partial<UsersData> {
  isRegDone?: boolean
}

class Form extends React.Component<{}, State> {

  readonly state = {
    name: '',
    surname: '',
    sex: 'male' as Sex,
    program_of_loyalty: 'not available' as ProgramOfLoyalty,
    isRegDone: false
  }

  postNewUser = (newUser: Required<UsersData>) => {
    axios
      .post('http://localhost:3001/list-of-clients/', {
        id: Math.round(Math.random() * (200000000000 - 100000000000) + 100000000000),
        ...newUser
      })
      .then(() => this.setState({
        isRegDone: true,
        name: '',
        surname: '',
        sex: 'male' as Sex,
        program_of_loyalty: 'not available' as ProgramOfLoyalty,
      }))
      .catch(data => alert('Ошибка отправки на серевер'));
  }

  handleForm = ({ target: { value, name, type } }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (value === "card number") {
      this.setState({
        [name]: 0
      })
      return;
    }
    this.setState({
      [name]: type === "number" ? +value.trim() : value
    })

  }

  handleRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name, surname, sex, program_of_loyalty } = this.state;

    if (!name || !surname) {
      this.handleError();
      return;
    }

    try {
      const newUser: Required<UsersData> = {
        name,
        surname,
        sex,
        program_of_loyalty,
        date: moment(new Date()).format('DD.MM.YY HH:mm')
      }
      this.postNewUser(newUser);
    } catch {
      this.handleError();
    }
  }

  handleError = () => {
    alert('Вы неправильно заполнили поля');
  }

  render() {
    const { program_of_loyalty, isRegDone, name, surname } = this.state
    return (<div className="registration__area">
      { !isRegDone ? (<form className="registration__form">
        <input
          className="registration__form-name"
          type="text"
          placeholder="Имя"
          name="name"
          value={name}
          onChange={this.handleForm} />
        <input
          className="registration__form-name"
          type="text"
          placeholder="Фамилия"
          name="surname"
          value={surname}
          onChange={this.handleForm} />
        <p className="registration__form-p">Пол:</p>
        <select className="registration__form-sex" name="sex" onChange={this.handleForm}>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        <p className="registration__form-p">Программа лояльности:</p>
        <select className="registration__form-program" name="program_of_loyalty" onChange={this.handleForm}>
          <option value="not available">Недоступен</option>
          <option value="mobile app">Мобильное приложение</option>
          <option value="card number">Пластиковая карта</option>
        </select>
        {
          (typeof program_of_loyalty === 'number') && <div className="registration__form-card">
            <p className="registration__form-p">Номер карты:</p>
            <input
              className="registration__form-card-input"
              type="number"
              name="program_of_loyalty"
              value={program_of_loyalty}
              placeholder="Номер карты"
              onChange={this.handleForm} />
          </div>
        }
        <button onClick={this.handleRegistration}
          className="registration__form-button">Зарегистрировать</button>
      </form >) : <RegDone />
      }
    </div>
    )
  }
}

export default Form;
