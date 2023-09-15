import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth'
import axios from '../../api/axios'
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';

const LOGIN_URL = '/auth'

const Login = () => {
  const { setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttrs] = useInput('user', '');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [check, toggleCheck] = useToggle('persist', false)

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )

      console.log(JSON.stringify(response?.data))

      const accessToken = response?.data?.accessToken
      // const roles = response?.data?.roles

      setAuth({ user, accessToken })

      // setUser('')
      resetUser()
      setPwd('')
      navigate(from, { replace: true })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing username or password.')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized. invalid username or password')
      } else {
        setErrMsg('Login failed! Please try again.')
      }

      errRef.current.focus()
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>

        <input
          type="text"
          id="username"
          ref={userRef}
          {...userAttrs}
          required
        />

        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />

        <button>Sign In</button>

        <div className="persistCheck">
          <input
            type="checkbox"
            id="persist"
            onChange={toggleCheck}
            checked={check}
          />

          <label htmlFor="persist">Trust this device</label>
        </div>
      </form>

      <p>
        Do not have an account yet?
        <br />
        <span className="line">
          {/* put router link here */}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
