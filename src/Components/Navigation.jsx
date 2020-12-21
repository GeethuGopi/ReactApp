import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
const Navigation = () => {
    const [displayMenu,setDisplayMenu] = useState(false)
    let menuItems; 
    let menuMask;

    //paste the code here that I sent...
    if (displayMenu) {
        menuItems = <ul className="fixed top-0 left-0 bg-white w-6/12 h-full shadow z-30 list-none">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
        </ul>
        menuMask = <div className="bg-black fixed top-0 left-0 w-full h-full z-20"
        onClick = {() => setDisplayMenu(false)}></div>
        
    }

    // if (displayMenu){
    //     menuItems = <div 
    //         className= "bg-white fixed top-0 left-0 w-3/5 shadow-md h-full z-50 text-center">
    //             <ul className = "list-none">
    //                 <li>Home</li>
    //                 <li>About</li>
    //                 <li>Contact</li>
    //             </ul>
    //             menuMask = <div className="bg-black fixed top-0 left-0 w-full h-full z-20"></div>
    //     </div>}
    return (
        <nav>
            <span className="text-xl cursor-pointer ">
                <FontAwesomeIcon icon={faBars} className="text-lg" 
                    onClick={()=>setDisplayMenu(!displayMenu)}/>
            </span>
            {menuMask}
            {menuItems}
        </nav> 
        );
}
 
export default Navigation;