import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {useTransition, animated} from 'react-spring'
import {Link} from 'react-router-dom';

const Navigation = () => {
    const [displayMenu,setDisplayMenu] = useState(false)

    const menuTransitions = useTransition(displayMenu, null, { // given animation for nav using react-spring library
        from: { opacity: 0, transform: 'translateY(-100%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(-100%)' },
        })

        const maskTransitions = useTransition(displayMenu, null, { // given animation for nav using react-spring library
            from: { position: 'absolute', opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            })
    let menuItems; 
    let menuMask;

    //paste the code here that I sent...
    // if (displayMenu) {
    //     menuItems = <ul className="fixed top-0 left-0 bg-white w-6/12 h-full shadow z-30 list-none">
    //             <li>Home</li>
    //             <li>About</li>
    //             <li>Contact</li>
    //     </ul>
    //     menuMask = <div className="bg-black-trans-70 fixed top-0 left-0 w-full h-full z-20"
    //     onClick = {() => setDisplayMenu(false)}></div>
        
    // }

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

                    {maskTransitions.map(({ item, key, props }) =>
                    item && <animated.div key={key} style={props} className="bg-black-trans-70 fixed top-0 left-0 w-full h-full z-20 bg-black fixed top-0 left-0 w-full h-full z-20"
                    onClick={()=>setDisplayMenu(false)}
                        >

                        <span className="text-white text-lg cursor-pointer absolute top-0 right-0 p-4"
                            onClick={()=>setDisplayMenu(false)}
                            >X</span>
                            </animated.div> //animation using react-spring
                    )}

                

                    {menuTransitions.map(({ item, key, props }) =>
                    item && <animated.div key={key} style={props} className="fixed top-0 left-0 bg-white w-6/12 h-full shadow z-30 list-none">
                            <ul>
                                
                                    <li>
                                        <Link className="text-blue-400" to="/">Home</Link>
                                    </li>
                                
                                
                                    <li>
                                        <Link className="text-blue-400" to="/about">About
                                    </Link></li>
                                 
                                 
                                    <li>
                                        <Link className="text-blue-400" to="/contact">Contact
                                    </Link></li>
                                 
                        </ul>
                            </animated.div> //animation using react-spring
                    )}
            </span>
            
            {/* {menuMask}
                {menuItems}*/}
        </nav> 
        );
}
 
export default Navigation;