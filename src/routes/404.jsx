import { useRouteError, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Error404, ServerError } from "../constants/constants";

const ErrorPage = ({ errorTitle, errorMessage }) => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <div className="centered">
        <div className="row">
          <div className="col-md-12">
            <div className="card"></div>
          </div>
        </div>
        <div className="card d-sm-flex">
          <div className="card-body text-start">
            <h4 className="card-title">{errorTitle}</h4>
            <p className="card-text">{errorMessage}</p>
            <Link to="/">
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  background: "#A0373E",
                  borderRadius: "3%",
                }}
              >
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const Error404Page = () => (
  <ErrorPage errorTitle={Error404.title} errorMessage={Error404.message} />
);

export const ServerErrorPage = () => (
  <ErrorPage errorTitle={ServerError.title} errorMessage={ServerError.message} />
);