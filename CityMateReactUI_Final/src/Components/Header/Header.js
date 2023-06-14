import React from 'react';
import './Header.css';


function Header() {
    return (
        <>
          <div className="hovereffect">
            <video style={{
                 width: "100%" 
                }} autoPlay loop muted >
                <source src = "./images/video_effect.mp4" type="video/mp4"/> 
                </video>
                <div className="overlay">
                    <h2>Welcome to CityMate</h2>
                    <p>Know About Chandigarh City</p>
            </div>
            </div>
        </>
    )
}

export default Header;
