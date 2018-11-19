import * as React from 'react'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-brand" to="/"> CRS-TS </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/albums"> Albums </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/albums/add"> Add Album </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}