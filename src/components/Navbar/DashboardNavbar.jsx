import React from "react";
import Images from "../../utils/images.js";
import { MdNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DashboardNavbar = ({ dashboadMenus, profileImage, profileName }) => {
  return (
    <div className="navbar-height">
    <nav className="navbar navbar-light bg-white fixed-top navbar-expand-md shadow-sm p-2 justify-content-center ">
      <div className="container-fluid">
        <a className="navbar-brand d-flex w-50 me-auto " href="#">
          <img
            src={Images.logo}
            alt="No Logo"
            className="img-responsive logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsingNavbar3"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
          <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item navigation-header-link-active">
              <NavLink to="/home/all" className="nav-link px-4" data-testid="Home">
                {dashboadMenus[0]}
              </NavLink>
            </li>
            <li
              className="nav-item navigation-header-link-active"
              data-testid="Learning"
            >
              <NavLink
                to="/learning"
                className="nav-link px-4"
                data-testid="learning"
              >
                {dashboadMenus[1]}
              </NavLink>
            </li>
            <li
              className="nav-item navigation-header-link-active"
              data-testid="Community"
            >
              <NavLink
                to="/community"
                className="nav-link px-4"
                data-testid="community"
              >
                {dashboadMenus[2]}
              </NavLink>
            </li>
          </ul>

          <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#" data-testid="Bell">
                <MdNotificationsActive className="fs-4" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profileImage}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                  data-testid="Profile"
                />
                {profileName}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-left"
                aria-labelledby="navbarScrollingDropdown"
                data-testid="ProfileCard"
              >
                <li>
                  <NavLink
                    to="/home/all/profile"
                    className="dropdown-item header-dropdown"
                    data-testid="profile"
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item header-dropdown" href="#">
                    Contact 2nd Careers
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="dropdown-item header-dropdown"
                    data-testid="logout"
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default DashboardNavbar;
