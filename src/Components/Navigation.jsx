import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
const Navigation = () => {
    const [displayMenu,setDisplayMenu] = useState(false)
    let menuItems; 
    if (displayMenu){
        menuItems = <div className= "bg-white fixed top-0 left-0 w-3/5 shadow-md h-full z-50">The menu items</div>}
    return (
        <nav>
            <span className="text-xl cursor-pointer ">
                <FontAwesomeIcon icon={faBars} className="text-lg" 
                    onClick={()=>setDisplayMenu(!displayMenu)}/>
            </span>
            {menuItems}
        </nav> 
        );
}
 
export default Navigation;