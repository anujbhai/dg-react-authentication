import { createContext, useState } from "react"
import PropTypes from 'prop-types'

const AuthContext = createContext({});

export const AuthProvider = props => {
  const {children} = props

  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any
}

export default AuthContext

