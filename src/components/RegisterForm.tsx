import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { formValidation } from '../helpers/formValidation';
import { fetchLogData } from '../helpers/fetchData';
interface Resp {
  isRegistrationDone: boolean;
  userName: string;
}

export const RegisterForm: React.FC = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [name, setName] = useState('');
  const [inputErrors, setInputErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: ''
  })

  const history = useHistory();

  const handleSubmit = () => {
    const errors = formValidation(password, confirmedPassword, name, email);
    const withoutErrors = Object.values(errors).every(value => value === '');
    if (withoutErrors) {
      tryToMakeRegistration();
    } else {
      setInputErrors(errors);
    }
  }

  const tryToMakeRegistration = async () => {
    const data = await fetchLogData('POST', '/register', { email, password, name });
      if (data.isRegistrationDone) { 
        history.push('/enter');
      }
  
  }

  return (
    <div className="wrapper">
      <form className="form">
        <input 
          className="form__input" 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(ev) => {
            setName(ev.target.value);
            setInputErrors({...inputErrors, name: ''})
          }}
        />
        <p className="form__error">{inputErrors.name}</p>
        <input 
          className="form__input" 
          type="email" 
          placeholder='Email'  
          value={email} 
          onChange={(ev) => {
            setMail(ev.target.value);
            setInputErrors({...inputErrors, email: ''})
          }}
        />
        <p className="form__error">{inputErrors.email}</p>
        <input 
          className="form__input" 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(ev) => {
            setPassword(ev.target.value);
            setInputErrors({...inputErrors, password: '', confirmedPassword: ''})
          }}
        />
        <p className="form__error">{inputErrors.password}</p>
        <input 
          className="form__input" 
          type="password" 
          placeholder="Confirm password" 
          value={confirmedPassword} 
          onChange={(ev) => setConfirmedPassword(ev.target.value)}
        />
        <p className="form__error">{inputErrors.confirmedPassword}</p>
        <button className="form__button" type='button' onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}