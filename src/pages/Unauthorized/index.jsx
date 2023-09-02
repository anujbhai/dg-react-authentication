import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <>
      <section>
        <h1>Unauthorized.</h1>

        <p>You do not have access to the requested page.</p>

        <div className="flexGrow">
          <button onClick={handleGoBack}>Go Back.</button>
        </div>
      </section>
    </>
  );
};

export default Unauthorized;
