import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.css'

const Header = () => (
    <header id="header">
      <div className='avatar'>TC</div>
      <nav className="links">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/resume'>resume</Link></li>
          <li><Link to='/leetcode'>leetcode</Link></li>
        </ul>
      </nav>
    </header>
)

export default Header
