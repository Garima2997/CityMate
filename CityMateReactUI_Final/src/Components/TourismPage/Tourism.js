import { Link } from 'react-router-dom';
import './Tourism.css'

function Tourism() {
  return( 
  <>
  <div className="bg">
  <div  style={{paddingTop:"7px" ,paddingLeft:"7px"}}>
  <Link className="btn btn-primary mr-2" to={`/currentHotspot`}>Edit CurrentHotSpot</Link>
  <Link className="btn btn-primary mr-2" to={`/historicalPlaces`}>Edit HistoricalPlaces</Link> 
  <div style={{height:'500px'}}/>  
  </div>
 </div>


  
  </>
 

  )
}

export default Tourism;
