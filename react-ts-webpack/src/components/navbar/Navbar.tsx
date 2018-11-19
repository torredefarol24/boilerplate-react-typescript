import * as React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Hello } from '../hello/Hello';
import { Users } from '../users/Users';
import { UserDetails } from '../users/User-Details';

const Navbar = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">RCT-TS-WBP</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Route name='home-route' exact path="/" component={ () => <Hello message="TypeScript Fan"/> } />
        <Route name='users-route' exact path="/users" component={Users} />
        <Route name='user-details-route' path="/users/:id/details" component={UserDetails} />

      </div>
    </BrowserRouter>
  )
}

export default Navbar