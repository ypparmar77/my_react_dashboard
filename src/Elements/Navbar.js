import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import yp from "../Elements/img/yp-logo.png";
import "./style/Nevbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ setSearchTerm }) { 
  const [searchInput, setSearchInput] = useState("");  

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);  
    setSearchTerm(e.target.value);  
  };

  return (
    <div className="fixed-top" style={{marginLeft:"250px"}}>
      <nav className="NEV navbar navbar-expand-sm bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="#">
            <img src={yp} style={{ width: "55px" }} alt="logo" />
          </a>

          {/* input search work */}
          
          <div id="Search" className="search-box">
            <button className="btn-search" type="submit" id="SEARCH">
              <i className="bi bi-search"></i>
            </button>
            <input
              type="text"
              className="input-search"
              value={searchInput}  
              onChange={handleSearchChange}  
              placeholder="Type to Search..."
            />
          </div>
          
          <div>
            <button className="btn btn-dark me-2" style={{ fontSize: "20px" }}>
              <i className="bi bi-bell"></i>
            </button>
            <button className="btn btn-dark me-2" style={{ fontSize: "20px" }}>
              <i className="bi bi-chat"></i> 
            </button>
            <button className="btn btn-dark me-3" style={{ fontSize: "20px" }}>
            <i className="bi bi-currency-dollar"></i>
            </button>
            <Link to="/Form">
              <button id="Add_button" className="Add" role="button">
                Add Task
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
