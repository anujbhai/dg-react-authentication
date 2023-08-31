import { Link } from "react-router-dom";

const Lounge = () => {
  return (
    <>
      <section>
        <h1>Please wait</h1>

        <p>
          You can wait here or visit other page. Click here to go to{" "}
          <Link to="/">Home</Link>.
        </p>
      </section>
    </>
  );
};

export default Lounge;
