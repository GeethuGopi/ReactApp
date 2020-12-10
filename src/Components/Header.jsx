import React from 'react';
import Navigation from "./Navigation";
const Header = () => {
  return ( 
    <header className="border-b2 shadow-sm p-3 flex justify-between items-center font-bold">
    <span className = "font-bold">
      The header
      </span>
      <Navigation />
    </header>
   );
}
 
export default Header;