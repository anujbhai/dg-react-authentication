import { useEffect, useRef, useState } from "react"

const Login = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = (e) => {
    e.preventDefault()


  }

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? 'errMsg' : 'offscreen'}
        aria-live="assertive"
      >{errMsg}</p>

      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>

        <input
          type="text"
          id="username"
          ref={userRef}
          onChange={e => setPwd(e.target.value)}
          value={pwd}
          required
        />

        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          onChange={e => setUser(e.target.value)}
          value={user}
          required
        />

        <button>Sign In</button>
      </form>

      <p>
        Do not have an account yet?<br />
        <span className="line">
          {/* put router link here */}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
  )
}

export default Login

