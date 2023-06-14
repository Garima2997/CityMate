import React from 'react'
import { Link } from 'react-router-dom';

import EditRoundedIcon from '@material-ui/icons/EditRounded';
const profile = () => {
  return (
    <div>
    <div style={{backgroundImage: `url( https://www.stjohnschandigarh.com/images/100.jpg )`, height:"558px",paddingLeft:"5px"}}  >
    <Link className="btn bg-warning ml-4 mt-5" to={`/edit-schools`} ><EditRoundedIcon/> Edit Schools</Link>
    <Link className="btn bg-warning ml-4 mt-5" to={`/edit-colleges`}><EditRoundedIcon/>Edit Colleges</Link>
   
    </div>
</div>
  )
}
export default profile;