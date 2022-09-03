import React from "react"
import { NavLink } from "react-router-dom"

function SideBar() {
  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeClassName="active">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/alerts" activeClassName="active">Alerts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/invalid-link" activeClassName="active">Not Found</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default SideBar