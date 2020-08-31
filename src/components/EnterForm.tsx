import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkToken } from '../helpers/constants';
import { fetchLogData } from '../helpers/fetchData';
import { setAuthorization } from '../store/autorizes';
import { setRegisteredUser } from '../store/registeredUser';

export const EnterForm: React.FC = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const [err, setErr] = useState('');

  const handleEnter = async () => {
    console.log('')
    const data = await fetchLogData('POST', '/enter', { mail, password })
    if(data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.userName);
      dispatch(setAuthorization(true));
      checkToken(data.token)
      dispatch(setRegisteredUser(data.userName));
      history.push('/page1');
    } else {
      console.log('else')
      setErr('Check your mail and password')
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
        <button className="form__button"type='button' onClick={handleEnter}>Enter</button>
      </form>
    </div>
  )
}