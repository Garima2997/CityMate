import React from 'react';
import GoogleMapReact from 'google-map-react'
import './Map.css';
import { Row , Col , Button} from 'reactstrap';
import '../../App.css'
import '../../App.js'


function Map() {

    const API_KEY = 'AIzaSyDbS6ibt7WPft_Mf3bgWX4xnuAdcKaZmIE';
    const location = {
        address: 'Chandigarh',
        lat: 30.741482,
        lng: 76.768066,
    }

   
    
    return (
        <>
        <div className="map">
        <h1 className="mt-4 mb-4">City Map</h1>
        </div >
        <Row>
        <Col md={6} className="google-map " >
        <GoogleMapReact 
        bootstrapURLKeys={{ key: API_KEY  }}
        defaultCenter={location}
        defaultZoom={16}
        options={{ gestureHandling: "cooperative" }}
        ></GoogleMapReact>
        </Col>
        <Col>
            <h3 className="mt-5">To See the Bus Routes</h3>
            <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                outline color="danger" href="https://chdctu.gov.in/sites/default/files/documents/LocalTimeTable260220.pdf">
            
                        Click Here  
                         
            </Button>
            
             <h3 className="mt-5">To Get Details about Railway Stations and Airport</h3>
            <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                outline color="danger " href="http://airportchandigarh.com/transport/chandigarh-railway-station-schedules">
            
                        Click Here  
            </Button>
            </Col>
            </Row>
         
          </>
)}

export default Map;


  