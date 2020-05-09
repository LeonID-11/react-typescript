import React from 'react'

export const Navbar: React.FunctionComponent = () => {
   return (
      <nav>
         <div className="nav-wrapper red lighten-3 px1">
            <a href="/" className="brand-logo">React TypeScript</a>
            <ul className="right hide-on-med-and-down">
               <li><a href="/">List page</a></li>
               <li><a href="/">Info</a></li>
            </ul>
         </div>
      </nav>
   )
}
