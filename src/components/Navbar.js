import React, { useContext } from "react";
import { appContext } from "../App";
export default function Navbar() {
  const { cartItem } = useContext(appContext);
  return (
    <div className="w-100">
      <nav className={`navbar navbar-dark bg-dark fixed-top`}>
        <div className="d-flex align-items-center w-100 justify-content-between p-3">
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
          <div
            className={`offcanvas offcanvas-start text-bg-dark`}
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                VCriate E-commerce
              </h5>
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
                    className="nav-link dropdown-toggle w-100 active"
                    href="!#"
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
                    <li className="p-2">
                      <a className="dropdown-item" href="!#">
                        Your Orders
                      </a>
                    </li>
                    <li className="p-2">
                      <a className="dropdown-item" href="!#">
                        Your Cart
                      </a>
                    </li>
                    <li className="p-2">
                      <a className="dropdown-item" href="!#">
                        Your Wishlist
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mt-2">Account and Settings</li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="!#"
                    style={{ fontSize: "20px" }}
                  >
                    - Acount Details
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="!#"
                    style={{ fontSize: "20px" }}
                  >
                    - FAQ
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="!#"
                    style={{ fontSize: "20px" }}
                  >
                    - Contact Us
                  </a>
                </li>

                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle w-100"
                    href="!#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: "20px" }}
                  >
                    - Privacy and Settings
                  </a>
                  <ul className={`dropdown-menu dropdown-menu-dark border-0`}>
                    <li className="p-2">
                      <a className="dropdown-item" href="!#">
                        Edit Account Details
                      </a>
                    </li>
                    <li className="p-2">
                      <a className="dropdown-item" href="!#">
                        Account Settings
                      </a>
                    </li>
                    <li className="p-2">
                      <a className="dropdown-item" href="!#">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mt-2">Others</li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="!#"
                    style={{ fontSize: "20px" }}
                  >
                    - Become Seller
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="!#"
                    style={{ fontSize: "20px" }}
                  >
                    - Help and Support
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="!#"
                    style={{ fontSize: "20px" }}
                  >
                    - Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`d-flex align-items-center text-light w-75 ms-2`}>
            <div className="me-1 ms-1 w-100">
              <form className="d-flex align-items-center w-100">
                <input
                  type="text"
                  className="bg-secondary bg-opacity-25 rounded border p-2 w-100 text-light"
                ></input>
                <button className="btn btn-success btn-lg ms-1">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="ms-1">
              <button
                type="button"
                class="btn btn-dark position-relative"
                style={{ fontSize: "25px" }}
              >
                <i className="fa fa-shopping-cart"></i>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "15px" }}
                >
                  {cartItem.length}
                </span>
              </button>
            </div>
            <div className="btn-group dropstart ms-1">
              <button
                type="button"
                class={`btn btn-transparent dropdown-toggle`}
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
                  <hr class="dropdown-divider" />
                </li>
                <li className="p-2">
                  <a className="dropdown-item" href="!#">
                    <i className="fa fa-user-o" aria-hidden="true"></i> Profile
                  </a>
                </li>
                <li className="p-2">
                  <a className="dropdown-item" href="!#">
                    <i className="fa fa-cog" aria-hidden="true"></i> Settings
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li className="p-2">
                  <a className="dropdown-item" href="!#">
                    <i class="fa fa-life-ring"></i> Help and Support
                  </a>
                </li>
                <li className="p-2">
                  <a className="dropdown-item" href="!#">
                    <i class="fa fa-question-circle-o" aria-hidden="true"></i>{" "}
                    FAQ
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li className="p-2">
                  <a
                    className="dropdown-item"
                    href="!#"
                    style={{ fontWeight: "600" }}
                  >
                    <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
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
