import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { onlyUser } from '../helpers/constants';

interface Props {
  handleLogin: (value: boolean) => (void);
}

export const EnterForm: React.FC<Props> = ({ handleLogin }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const history = useHistory();

  const handleEnter = async () => {
    if (mail !== onlyUser.email || password !== onlyUser.password) {
      setErr('Check your mail and password')
    } else {
      localStorage.setItem('user', mail);
      handleLogin(true);
      history.push('/page1');
    }
  }

  return (
    <div className="wrapper">
      <form className="form">
        <p>{err}</p>
        <input 
          className="form__input" 
          type="email" 
          placeholder='email' 
          name="email" 
          value={mail} 
          onChange={(ev) => {
            setMail(ev.target.value);
            setErr('');
          }}
        />
        <p className="form__error"></p>
        <input 
          className="form__input" 
          type="password" 
          placeholder="password" 
          value={password} 
          onChange={(ev) => {
            setPassword(ev.target.value);
            setErr('');
          }}
        />
        <p className="form__error"></p>
        <button 
          className="form__button"
          type='button' 
          onClick={handleEnter}
        >
          Enter
        </button>
      </form>
    </div>
  )
}