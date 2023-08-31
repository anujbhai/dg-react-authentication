import { Link } from 'react-router-dom'

const Linkpage = () => {
  return (
    <>
      <section>
        <h1>Please wait</h1>

        <h3>Public</h3>

        <ul>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/register">Register Page</Link>
          </li>
        </ul>

        <h3>Private</h3>

        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/editor">Editor Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Linkpage;
