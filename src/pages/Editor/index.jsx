import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <>
      <section>
        <h1>Welcome Editor</h1>

        <p>
          You can wait here or visit other page. Click here to go to{" "}
          <Link to="/">Home</Link>.
        </p>
      </section>
    </>
  );
};

export default Editor;
