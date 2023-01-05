import React from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'

const Home = () => <p>Home</p>;
const Settings = () => <p>Settings</p>;
const Account = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/account">My Account</Link>{' '}
        <Link to="/account/settings">Settings</Link>{' '}
      </nav>
      <h1>My Account</h1>
      <Router>
        <Home path="/account"/>
        <Settings path="/account/settings"/>
      </Router>
    </>
  )
};

export default Account;