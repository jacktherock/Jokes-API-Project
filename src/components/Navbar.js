import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand fw-bold text-uppercase" href="#/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7014/7014378.png"
              width={50}
              height={50}
              alt=""
              className="mx-3"
            />
            You Laugh You Lose
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
