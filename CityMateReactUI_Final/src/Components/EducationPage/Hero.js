import "../../App.css";
import { Link } from 'react-router-dom';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

import React from 'react';

const Hero = () => (
       
     <div style={{backgroundImage: `url(https://i0.wp.com/www.bobochachaballoon.com/wp-content/uploads/2020/11/why-helium-balloons-are-perfect-for-graduation-parties.jpg?fit=1186%2C864&ssl=1)`,height:"600px",width:"100%",margin: "0px",
     padding: "10px"}}  >
          <h1 style={{fontSize:"100px"}}>A Journey to Excellence</h1>
          <div style={{ display: "flex",
            justifyContent: 'center',
            alignItems: 'center'}}>
          <Link className="btn btn-warning mr-1 " to={`/all-schools`}><VisibilityRoundedIcon/> Schools</Link>
          <Link className="btn btn-warning" to={`/all-colleges`}><VisibilityRoundedIcon/> Colleges</Link>
          </div>
           
          </div>
);

export default Hero;