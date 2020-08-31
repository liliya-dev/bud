import React, { useState } from 'react';
import { addFormValidation } from '../../helpers/formValidation';
import { InitialState } from '../../interfaces';

interface Props {
  initialStates: InitialState;
  isEdit: boolean;
  finishEditing: () => (void);
}

export const AddForm: React.FC<Props> = ({ initialStates, isEdit, finishEditing }) => {
  const [email, setMail] = useState(initialStates.email);
  const [surname, setSurname] = useState(initialStates.surname);
  const [name, setName] = useState(initialStates.name);
  const [phone, setPhone] = useState(initialStates.phone);
  const [additionalPhone, setAdditionalPhone] = useState(initialStates.additionalPhone);
  const [additionalMail, setAdditionalMail] = useState(initialStates.additionalMail);
  const [isVisiblePhone, setIsVisiblePhone] = useState(initialStates.isPhoneVisible);
  const [isVisibleMail, setIsVisibleMail] = useState(initialStates.isMailVisible);
  const [inputErrors, setInputErrors] = useState({
    name: '',
    email: '',
    surname: '',
    phone: '',
    additionalPhone: '',
    additionalMail: '',
  })

  const validateForm = () => {
    const errors = addFormValidation(
      phone, surname, name, email, isVisiblePhone, isVisibleMail, additionalPhone, additionalMail
    );
    const withoutErrors = Object.values(errors).every(value => value === '');
    if (withoutErrors) {
      let db = window.openDatabase("users", "1.0", "Test DB", 1000000);
      const phones = additionalPhone.length ? `${phone}  ${additionalPhone}` : phone;
      const emails = additionalMail.length ? `${email}  ${additionalMail}` : email;
      if (db) {
        if (!isEdit) {
          db.transaction(function (tx) { 
            tx.executeSql(`INSERT INTO UserData (id, name, surname, phone, email) 
            VALUES (${Date.now()}, "${name}", "${surname}", "${phones}", "${emails}" )`); 
          });
          setMail('');
          setName('');
          setPhone('');
          setSurname('');
          setAdditionalMail('');
          setAdditionalPhone('');
          setIsVisibleMail(false);
          setIsVisiblePhone(false);
        }
        else {
          db.transaction(function (tx) { 
            console.log('start')
            tx.executeSql(`UPDATE UserData SET name="${name}", surname="${surname}", phone="${phones}", 
            email="${emails}"
            WHERE id = ${initialStates.id};`); 
          });
          finishEditing();
        }
      } 
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
            <div className="add-form__container">
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
              {
                !isVisiblePhone &&(
                  <button className="add-form__add" onClick={() => setIsVisiblePhone(true)}>+</button>   
                )
              }
            </div>
            <div className="input__error">{inputErrors.phone}</div>
          </span>
            {
              isVisiblePhone && (
                <>
                  <input 
                  className="add-form__input"
                  type="tel"
                  placeholder="+38xxxxxxxxxx"
                  value={additionalPhone}
                  onChange={(ev) => {
                    setAdditionalPhone(ev.target.value)
                    setInputErrors({...inputErrors, additionalPhone: ''})
                  }}
                />
                  <div className="input__error">{inputErrors.additionalPhone}</div>
                </>
              )

            }
          <span>
            <div className="add-form__container">
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
              {
                !isVisibleMail && (
                  <button className="add-form__add" onClick={() => setIsVisibleMail(true)}>+</button>   
                )
              }
            </div>
            <div className="input__error">{inputErrors.email}</div>
            </span>
            {
              isVisibleMail && (
                <>
                  <input 
                  className="add-form__input"
                  type="email"
                  placeholder="Email"
                  value={additionalMail}
                  onChange={(ev) => {
                    setInputErrors({...inputErrors, additionalMail: ''})
                    setAdditionalMail(ev.target.value)
                  }}
                />
                  <div className="input__error">{inputErrors.additionalMail}</div>
                </>
              )
            }
          <span>
          </span>
        </span>
      </form>
      <div className="add-form__button-wrapper">
        <button 
          type='button'
          className="add-form__button"
          onClick={validateForm}
        >
          Submit
        </button>
        {
          isEdit && (
            <button 
              type='button'
              className="add-form__button"
              onClick={finishEditing}
            >
              Cancel
            </button>
          )
        }
      </div>
    </>
  )
}