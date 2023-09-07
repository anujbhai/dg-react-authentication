import { Link, useNavigate } from "react-router-dom";

import useLogout from "../../hooks/useLogout";

const Home = () => {
  const navigate = useNavigate();

  const logout = useLogout();

  const handleSignout = async () => {
    await logout();
    navigate("/linkpage");
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
          <button onClick={handleSignout}>Sign out</button>
        </div>
      </section>
    </>
  );
};

export default Home;
