import React, { useContext } from "react";
import { appContext } from "../App";
import { Link } from "react-router-dom";
import debounce from "debounce";

export default function Navbar() {
  const { cartItems } = useContext(appContext);
  const { setSearchStr } = useContext(appContext);
  const searchInput = React.createRef();
  const handleSearch = debounce((event) => {
    event.preventDefault();
    if (searchInput.current) {
      setSearchStr(searchInput.current.value);
    }
  }, 500);

  return (
    <div className="w-100">
      <nav className={`navbar navbar-dark bg-dark fixed-top`}>
        <div className="d-flex align-items-center w-100 p-3 justify-content-between">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="text-light w-100 ms-3">
            <Link to="/" className="btn btn-dark" style={{ fontSize: "25px" }}>
              <i
                className="fa fa-home"
                onClick={() => {
                  setSearchStr("");
                }}
              ></i>
            </Link>
          </div>
          <div
            className={`offcanvas offcanvas-start text-bg-dark`}
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <Link
                  to="/"
                  style={{
                    fontSize: "25px",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  VCriate E-commerce
                </Link>
              </div>
              <button
                type="button"
                className={`btn-close btn-close-white`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle w-100"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    style={{ fontSize: "25px" }}
                  >
                    - Profile
                  </a>
                  <ul
                    className={`dropdown-menu show dropdown-menu-dark border-0`}
                  >
                    <li
                      className="p-2"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <a className="dropdown-item">Your Orders</a>
                    </li>
                    <li
                      className="p-2"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link to="/cart" className="dropdown-item">
                        Your Cart
                      </Link>
                    </li>
                    <li
                      className="p-2"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <a className="dropdown-item">Your Wishlist</a>
                    </li>
                    <li
                      className="p-2"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <a className="dropdown-item">Notification</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mt-2">Account and Settings</li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-current="page"
                    style={{ fontSize: "20px" }}
                  >
                    - Acount Details
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-current="page"
                    style={{ fontSize: "20px" }}
                  >
                    - FAQ
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-current="page"
                    style={{ fontSize: "20px" }}
                  >
                    - Contact Us
                  </a>
                </li>

                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle w-100"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: "20px" }}
                  >
                    - Privacy and Settings
                  </a>
                  <ul className={`dropdown-menu dropdown-menu-dark border-0`}>
                    <li
                      className="p-2"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <a className="dropdown-item">Edit Account Details</a>
                    </li>
                    <li
                      className="p-2"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <a className="dropdown-item">Account Settings</a>
                    </li>
                    <li
                      className="p-2"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <a className="dropdown-item">Privacy Policy</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mt-2">Others</li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-current="page"
                    style={{ fontSize: "20px" }}
                  >
                    - Become Seller
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-current="page"
                    style={{ fontSize: "20px" }}
                  >
                    - Help and Support
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-current="page"
                    style={{ fontSize: "20px" }}
                  >
                    - Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`d-flex align-items-center text-light ms-2 align-self-end`}
          >
            <form className="d-flex align-items-center me-2">
              <input
                type="text"
                className="bg-secondary bg-opacity-25 text-light p-1"
                style={{
                  border: "1px solid white",
                  borderRight: "none",
                }}
                onChange={handleSearch}
                ref={searchInput}
              />
              <button
                className="bg-secondary bg-opacity-25 text-light p-1"
                type="submit"
                style={{
                  borderTop: "1px solid white",
                  borderRight: "1px solid white",
                  borderBottom: "1px solid white",
                  borderLeft: "none",
                }}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>

            <div className="ms-1">
              <Link
                to="/cart"
                type="button"
                className="btn btn-dark position-relative"
                style={{ fontSize: "27px" }}
              >
                <i className="fa fa-shopping-cart"></i>
                <span
                  className="position-absolute translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "12px", top: "12px", left: "45px" }}
                >
                  {cartItems?.length || 0}
                </span>
              </Link>
            </div>
            <div className="btn-group dropstart">
              <button
                type="button"
                className={`btn btn-transparent dropdown-toggle`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="border border-2 border-success ms-2"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                  alt="..."
                  style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                ></img>
              </button>
              <ul
                className={`dropdown-menu dropdown-menu-light border-0`}
                style={{ width: "250px" }}
              >
                <li className="p-2">
                  <div className="d-flex align-items-center">
                    <img
                      className="border border-2 border-success ms-2"
                      src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                      alt="..."
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                      }}
                    ></img>
                    <div className="m-0 ms-3">
                      <p className="m-0">Nitish Soni</p>
                      <p className="m-0">Customer</p>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="p-2">
                  <a className="dropdown-item">
                    <i className="fa fa-user-o" aria-hidden="true"></i> Profile
                  </a>
                </li>
                <li className="p-2">
                  <a className="dropdown-item">
                    <i className="fa fa-cog" aria-hidden="true"></i> Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="p-2">
                  <a className="dropdown-item">
                    <i className="fa fa-life-ring"></i> Help and Support
                  </a>
                </li>
                <li className="p-2">
                  <a className="dropdown-item">
                    <i
                      className="fa fa-question-circle-o"
                      aria-hidden="true"
                    ></i>{" "}
                    FAQ
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="p-2">
                  <a className="dropdown-item" style={{ fontWeight: "600" }}>
                    <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
