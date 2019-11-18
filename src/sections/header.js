import React from 'react';
import {Link} from 'react-router-dom';

export function Header(props){
    return(
        <div>
            Top bar/navigation
            location state will need to get here
            <Link to='/registerlogin'>
                {props.loggedin === true && 'Log Out'}
                {!props.loggedin && 'Log In or Register'}
            </Link> 
        </div> 
    )
}