import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1">
        <a href="#!" className="brand-logo cloud">
          <i className="material-icons ">cloud</i>Socke
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">
              <i className="material-icons">home</i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="material-icons">refresh</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
