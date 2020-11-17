import React from 'react';
import Navigation from './Navigation';
const Header = () => {
    return (
    <div>
    <header className='border-b2 shadow-sm p-3'>
   <h1 className='text-center text-bold'>My React App</h1> 
   
    </header>
    <Navigation />
    </div>


      );
}
 
export default Header;