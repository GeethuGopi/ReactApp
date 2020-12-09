import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
const Navigation = () => {
    return (
        <nav>
            <span className="text-xl cursor-pointer text-lg">
                <FontAwesomeIcon icon={faBars} />
            </span>
        </nav> 
        );
}
 
export default Navigation;