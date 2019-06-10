import React, { Component } from 'react'
import './header.css';

export default class Header extends Component {
   render() {
      return (
         <header id='container-header-site'>
            <div id='header-site'>
               <nav id='nav-site'>
                  <a href='#' id='title-site'>
                     Start Bootstrap
                  </a>
                  <button id='menu-site-ham' className='text-uppercase'>Menu&#9776;</button>
                  <ul id='menu-site' className='text-uppercase'>
                     <li>Services</li>
                     <li>Portfolio</li>
                     <li>About</li>
                     <li>Team</li>
                     <li>Contact</li>
                  </ul>
               </nav>
               <div id='container-welcome-message'>
                  <p id='welcome-message-wc'>
                     Welcome To Our Studio!
                  </p>
                  <p id='welcome-message-ntmy' className='text-uppercase'>
                     It's nice to meet you
                  </p>
                  <button id='more-info-btn' className='text-uppercase'>
                     Tell me more
                  </button>
               </div>
            </div>
         </header>
      );
   }
}
