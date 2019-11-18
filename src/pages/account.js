import React from 'react';
import {Link} from 'react-router-dom'
import {Header} from '../sections/header';
import {Swap} from '../components/swap';

export function Accountpage(){
    return(
      <div>
        <Header/>
        the account page

        <Link to="/uploadgift">New Swap</Link>

        {/* list of swaps */}
        <ul>
          <li><Swap /></li>
        </ul>
      </div>  
    )
}