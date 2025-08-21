import Link from "next/link";
import React from "react";


export default function Navbar () {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark border-bottom border-body navbar-expand-lg">
      <div className="container-fluid">
          <h3>
            <Link className="text-white" href="/">Rahmat Taufik</Link>
          </h3>
          {/* <img src="/img/logo.png" width="50px" height="50px" style={{borderRadius: "100%"}} alt="" srcset="" /> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Admin">Data</Link>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

