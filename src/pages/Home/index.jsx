import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from '../../context/AuthProvider'

const Home = () => {
  const { setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault();

    setAuth({})
    navigate('/linkpage')
  };

  return (
    <>
      <section>
        <h1>Home</h1>

        <p>You are logged in.</p>

        <ul>
          <li>
            <Link to="/editor">Editor Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/lounge">Lounge</Link>
          </li>
          <li>
            <Link to="/linkpage">Link Page</Link>
          </li>
        </ul>

        <div className="flexGrow">
          <button onClick={handleLogout}>Sign out</button>
        </div>
      </section>
    </>
  );
};

export default Home;
