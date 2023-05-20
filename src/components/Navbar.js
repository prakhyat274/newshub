import React, { Component } from 'react'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
            <a className="nav-logo" href="/"><img src="/navbar-logo.png" alt="Navbar-logo" /></a>
            <div className='nav-items'>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
              </ul>
              <input type="text" placeholder='Search'  className='search'/>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar