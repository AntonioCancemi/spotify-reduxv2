import { Button, Col } from "react-bootstrap";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setKeyWord } from "../redux/action/searchAction";
const LeftNav = () => {
  const dispatch = useDispatch();
  const keyWord = useSelector((state) => state.search.keyWord);
  return (
    <Col xs={2} className="">
      <NavBar
        expand="md"
        bg="dark"
        className="bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container">
          <NavBar.Brand className="navbar-brand" href="index.html">
            <img
              src="/Spotify_Logo.png"
              alt="Spotify_Logo"
              width="131"
              height="40"
            />
          </NavBar.Brand>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <NavBar.Collapse id="navbarNavAltMarkup">
            <Nav>
              <ul>
                <li>
                  <Link to={"/"} className="nav-item nav-link">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link to={"/library"} className="nav-item nav-link">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                    Library
                  </Link>
                </li>
                <li>
                  <InputGroup className="input-group mt-3">
                    <Form.Control
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={keyWord}
                      onChange={(e) => dispatch(setKeyWord(e.target.value))}
                    />
                    <div className="input-group-append mb-1">
                      <Button
                        className="btn-secondary text-light btn-outline-success"
                        type="button"
                        id="button-addon1"
                      >
                        GO
                      </Button>
                    </div>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </NavBar.Collapse>
        </div>

        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <br />
          <Link to="/Cookie">Cookie Policy</Link> |
          <Link to={"/Privacy"}> Privacy</Link>
        </div>
      </NavBar>
    </Col>
  );
};
export default LeftNav;
