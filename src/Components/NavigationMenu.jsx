import React from 'react'
import {Link} from 'react-router-dom'
const NavigationMenus = (props) => {
    return ( 
        <div>
            <ul>
                                    
                <li>
                    <Link className="text-blue-400" to="/" onClick={props.closeMenu}>Home</Link>
                </li>
            
            
                <li>
                    <Link className="text-blue-400" to="/about" onClick={props.closeMenu}>About</Link>
                </li>
            
            
                <li>
                    <Link className="text-blue-400" to="/contact" onClick={props.closeMenu}>Contact</Link>
                </li>
        
            </ul>
        </div>
     );
}
 
export default NavigationMenus;