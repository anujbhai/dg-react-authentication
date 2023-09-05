import { Link } from 'react-router-dom'
import Users from '../../components/Users';

const Admin = () => {
  return (
    <>
      <section>
        <h1>Hello Admin!</h1>

        <Users />

        <div className="flexGrow">
          <p>Click here to go to <Link to="/">Home</Link>.</p>
        </div>
      </section>
    </>
  );
};

export default Admin;
