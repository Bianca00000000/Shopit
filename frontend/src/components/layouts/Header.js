import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'

import '../../App.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

const Header = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth)
  const { cartItems } = useSelector(state => state.cart)

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.')
  }

    return (
        <Fragment>
            <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          {/* if press the logo you back to the homepage */}
          <Link to="/">
            <img src="./images/shopit_logo.png" /> 
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Route render={({ history }) => <Search history={history} /> } />
      </div>

      {/* here add the user data in the header */}
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        {/* the cart */}
        <Link to="/cart" style={{ textDecoration: 'none' }} >
          <span id="cart" className="ml-3">Cart</span>
          <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </Link>

        {/* if the user exists then is logged in => I create a drop down button through which the user can see what options he has on his profile , else he isn't logged in(I make sure that the profile is not loaded) => I display the login button to be able to log in*/}
        {user ? (
          <div className="ml-4 dropdown d-inline">
            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">

            {/* display the user's image and the menu for the user */}
              <figure className="avatar avatar-nav">
                <img src={user.avatar && user.avatar.url} alt={user && user.name} className="rounded-circle"/>
              </figure>
              <span>{user && user.name}</span>
            </Link>

            {/* the menu for the user and admin */}
            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

              {/* i want to display the dashboard only admins */}

              {user && user.role === 'admin' && (
                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
              )}
              <Link className="dropdown-item" to="/orders/me">Orders</Link>
              <Link className="dropdown-item" to="/me">Profile</Link>
              <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>Logout</Link>
            </div>

          </div>

        ) :  !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>
      }
        
      </div>
    </nav>
        </Fragment>
    )
}

export default Header