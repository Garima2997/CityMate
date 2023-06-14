import React from 'react';
import '../../../App.css';
import {Link} from 'react-router-dom';


export default function Admin() {
  return (
  <div className='admin'>
    <h1 className='sign-in'>Welcome ADMIN !!</h1>
    <p className='admin_page'> Please choose an action from the list below.</p>
     <div className='login'>
       <ul >
            <li><h2><Link to="/hospital">Hospital Management</Link></h2> </li>
            <li><h2><Link to="/pharmacy">Pharmacy Management</Link></h2></li>
             </ul> 
    </div>
    
    </div>
    
  )
}
