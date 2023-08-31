import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <>
      <section>
        <h1>Hello Admin!</h1>

        <p>
          You can wait here or visit other page. Click here to go to{" "}
          <Link to="/">Home</Link>.
        </p>
      </section>
    </>
  );
};

export default Admin;
