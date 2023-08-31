import { Link } from "react-router-dom";

const Home = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("supposed to log out.");
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
