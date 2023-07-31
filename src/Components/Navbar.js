import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate();

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Tazza Khabar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li><NavLink className="nav-link" activeClassName="active" exact to="/">Top</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/business">Business</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/entertainment">Entertainment</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/environment">Environment</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/health">Health</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/politics">Politics</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/science">Science</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/technology">Technology</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/sports">Sports</NavLink></li>
              </ul>
              <button onClick={() => navigate("/weather")} style={{backgroundColor: '#212529', border: 'none', padding : '5px', marginRight : '10px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"  className="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
                  <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
                  <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
}