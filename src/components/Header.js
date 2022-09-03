import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">
        <img src="logo192.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" /> <span className="align-middle">Transaction Monitoring</span>
      </NavLink>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
        data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <NavLink className="nav-link" to="/sign-in">Tai LE</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header