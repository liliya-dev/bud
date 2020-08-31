import React, { useState } from 'react';
import { addFormValidation } from '../../helpers/formValidation';

export const AddForm = () => {
  const [email, setMail] = useState('');
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inputErrors, setInputErrors] = useState({
    name: '',
    email: '',
    surname: '',
    phone: ''
  })

  const validateForm = () => {
    const errors = addFormValidation(phone, surname, name, email);
    const withoutErrors = Object.values(errors).every(value => value === '');
    if (withoutErrors) {
      console.log('okay');
    } else {
      setInputErrors(errors);
    }
  }
  
  return (
    <>
      <form className="add-form">
        <input 
          className="add-form__input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(ev) => {
            setName(ev.target.value);
            setInputErrors({...inputErrors, name: ''})
          }}
        />
        <div className="input__error">{inputErrors.name}</div>
        <input 
          className="add-form__input"
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(ev) => {
            setSurname(ev.target.value)
            setInputErrors({...inputErrors, surname: ''})
          }}
        />
        <div className="input__error">{inputErrors.surname}</div>

        <span>
          <span>
            <input 
              className="add-form__input"
              type="tel"
              placeholder="+38xxxxxxxxxx"
              value={phone}
              onChange={(ev) => {
                setPhone(ev.target.value)
                setInputErrors({...inputErrors, phone: ''})
              }}
            />
            <div className="input__error">{inputErrors.phone}</div>
          </span>
          <span>
            <input 
              className="add-form__input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(ev) => {
                setInputErrors({...inputErrors, email: ''})
                setMail(ev.target.value)
              }}
            />
            <div className="input__error">{inputErrors.email}</div>
          </span>
        </span>
      </form>
        <button 
        type='button'
        className="add-form__button"
        onClick={validateForm}
      >
        Submit
      </button>
    </>
  )
}