import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
            <Link className="nav-logo" to="/"><img src="/navbar-logo.png" alt="Navbar-logo" /></Link>
            <div className='nav-items'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
              <input type="text" placeholder='Search'  className='search'/>
            </div>
        </nav>
        <div className='navbar-2'>
          <div className='nav-items'>
              <ul>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/business">Businees</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/technology">Technology</Link></li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Navbar