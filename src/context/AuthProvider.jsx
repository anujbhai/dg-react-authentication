import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const { children } = props;

  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || false,
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
