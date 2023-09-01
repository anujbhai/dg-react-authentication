import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <>
      <section>
        <h1>Hello Admin!</h1>

        <p>You must have been assigned an Admin role.</p>

        <div className="flexGrow">
          <p>Click here to go to <Link to="/">Home</Link>.</p>
        </div>
      </section>
    </>
  );
};

export default Admin;
