import { Link } from "react-router-dom";

const Navbar = (props) => {
  const routes = [
    {name: "Products", path: "products"},
    {name: "About Us", path: "about"},
    {name: "Reviews", path: "reviews"}
  ]
  return (
    <nav className="navbar navbar-expand-md bg-body">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/`}>
          Buzzmart
        </Link>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav">
            <li className="nav-item" />
          </ul>
          {routes.map(({ name, path }, key) => {
            return (
              <Link to={`/${path}`} style={{ fontSize: 16, marginLeft: 20 }} key={key}>
                <span style={{ fontWeight: "lighter !important" }}>{name.toUpperCase()}</span>
              </Link>
            );
          })}
          <button
            className="btn btn-primary ms-auto"
            type="button"
            style={{ textAlign: "left" }}
          >
            VIEW CART
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
