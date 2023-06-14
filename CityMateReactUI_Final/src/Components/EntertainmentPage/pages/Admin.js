import React from 'react';
import '../../../App.css';
import {Link} from 'react-router-dom'


export default function Admin() {
    return <div className="admin-bg text-white">
        <h1 className="text-white admin-font" > WELCOME</h1>
        <br />
    <p className="ml-5 admin-p">Please choose an action from the list below.
             <ul >
                 <li><Link to="/restaurant">Restaurant</Link></li>
                 <li><Link to="/malls">Malls </Link></li>
                <li><Link to="/parks">Parks </Link></li>
                </ul>
     </p>
 </div>
}