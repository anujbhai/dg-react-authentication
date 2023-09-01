import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <>
      <section>
        <h1>Welcome Editor</h1>

        <p>
          You are assigned an Editor role.
        </p>

        <div className="flexGrow">
          <p>Click here to go to <Link to="/">Home</Link>.</p>
        </div>
      </section>
    </>
  );
};

export default Editor;
