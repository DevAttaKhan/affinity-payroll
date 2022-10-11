import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SplashArt from '../../assets/Icons/SplashArt';
import axios from 'axios';
import './style.scss';

const Intro = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_API_BASEURL}login`,
        {
          email: credentials.email,
          password: credentials.password,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        const loginData = {
          token: res.data.access_tokens,
          empData: res.data.employee_detail,
        };

        localStorage.setItem('loginData', JSON.stringify(loginData));
        navigate('/dashboard/home');

        //      context.dispatch({type:'login', payload:loginData})
      });
    // if (
    //   credentials.email === "admin@gmail.com" &&
    //   credentials.password === "admin"
    // ) {
    //   navigate("/dashboard/home");
    // }
  };

  const handleChange = (e) => {
    const input = { ...credentials };
    input[e.target.name] = e.target.value;
    setCredentials(input);
  };
  return (
    <section className="splash">
      <div className="splash__content">
        <h1 className="splash__heading">Welcome to Affinity Payroll</h1>

        <div className="splash__paragraph">
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                className="form-control"
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={credentials.password}
                name="password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>

      <SplashArt />
    </section>
  );
};

export default Intro;
