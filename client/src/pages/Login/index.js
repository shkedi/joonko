import React, {useState} from 'react';

import Logo from "assets/logo.svg";

import './index.scss';
import axios from "axios";
import Jobs from "../Jobs";

const formFields = [
  {type: 'email', name: 'email', placeholder: 'Enter work email'},
  {type: 'password', name: 'password', placeholder: 'Enter password'}
];

const Login = () => {
  const [values, setValues] = useState({[formFields[0].name]: 'sdv@joonko.co', [formFields[1].name]: '12345'});
  const [isError, setIsError] = useState(false);
  
  const onChangeInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: e.target.value}));
  }
  
  const onSubmitForm = async (e) => {
    if (!values.email || !values.email.length) {
      console.error(`email is empty`);
      setIsError(true);
      return;
    }
    if (!values.password || !values.password.length) {
      console.error(`password is empty`);
      setIsError(true);
      return;
    }
    
    if (values.email.replace(/.+@/, '') !== 'joonko.co') {
      console.error(`must has joonko domain`);
      setIsError(true);
      return;
    }
    setIsError(false);
    try {
      await axios.post('http://127.0.0.1:3001/api/v1/users/login', {
        email: values.email,
        password: values.password
      })
      // redirect
    } catch (err) {
      console.error(`error while trying to login`, err);
    }
  }
  
  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} className="header__logo" alt="logo" />
        <div className="header-wrapper">
          <span className="title">Joonko's Jobs Manager</span>
          <span className="subtitle">Enter your details</span>
        </div>
        <form className="auth-form" onSubmit={onSubmitForm} action={Jobs}>
          {formFields.map(({type, name, placeholder}) => (
            <input
              key={`form__${name}`}
              type={type}
              name={name}
              placeholder={placeholder}
              value={values[name]}
              onChange={onChangeInput}
            />
          ))}
          <button type="submit">Log in</button>
        </form>
        {isError &&
          <span className="error-msg">An error occurred, please check your credentials and try again.</span>}
      </div>
    </div>
  )
}

export default Login;