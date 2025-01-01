import React from "react";

import UploadTxt from "./UploadTxt/UploadTxt";

// interface SidebarProps {
//   titulo: string;
// }

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto gap-1 link-body-emphasis text-decoration-none">
        <i className="bi bi-chat-right-text chat-icon"></i>
        <span className="fs-4">What Smart Filters</span>
      </div>
      <hr></hr>
      <UploadTxt></UploadTxt>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use href="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li> 
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use href="#speedometer2"></use>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use href="#table"></use>
            </svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use href="#grid"></use>
            </svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use href="#people-circle"></use>
            </svg>
            Customers
          </a>
        </li>
      </ul>
      <hr></hr>
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          ></img>
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
