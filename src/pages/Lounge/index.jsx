import { Link } from "react-router-dom";

const Lounge = () => {
  return (
    <>
      <section>
        <h1>Please wait</h1>

        <p>
          You can wait here or visit other page.
        </p>

        <div className="flexGrow">
          <p>
            Click here to go to{" "}
            <Link to="/">Home</Link>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Lounge;
