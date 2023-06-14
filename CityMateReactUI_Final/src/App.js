import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import './App.css';
import ListEvents from './Components/EventsPage/ListEvents.js';
import AdminEvent from './Components/EventsPage/AdminEvent.js';
import UpdateEvent from './Components/EventsPage/UpdateEvent.js';
import CreateEvent from './Components/EventsPage/CreateEvent.js';
import RegisterUser from './Components/EventsPage/RegisterUser.js';
import ViewUser from './Components/EventsPage/ViewUser.js';
import LoginComponent from './Components/Admin/LoginPage.js';
import Transport from './Components/Transportation/Transport.js'
import Education from './Components/EducationPage/Education.js';
import ViewSchool from './Components/EducationPage/ViewSchool.js';
import ViewCollege from './Components/EducationPage/ViewCollege.js';
import UpdateCollege from './Components/EducationPage/UpdateCollege.js';
import UpdateSchool from './Components/EducationPage/UpdateSchool.js';
import AddSchool from './Components/EducationPage/AddSchool.js';
import AddCollege from './Components/EducationPage/AddCollege.js';
import EditColleges from './Components/EducationPage/EditColleges.js';
import EditSchools from './Components/EducationPage/EditSchools.js';
import AllSchools from './Components/EducationPage/AllSchools.js';
import AllColleges from './Components/EducationPage/AllColleges.js';
import EducationAdmin from './Components/EducationPage/EducationAdmin.js';
import RestaurantHome from './Components/EntertainmentPage/pages/Home.js';
import UserRestaurant from './Components/EntertainmentPage/pages/UserRestaurant.js';
import UserMalls from './Components/EntertainmentPage/pages/UserMalls.js';
import UserParks from './Components/EntertainmentPage/pages/UserParks.js';
import Admin from './Components/EntertainmentPage/pages/Admin.js';
import Malls from './Components/EntertainmentPage/pages/Mall.js';
import Parks from './Components/EntertainmentPage/pages/Parks.js';
import Restaurants from './Components/EntertainmentPage/pages/Restaurants.js';
import HealthHome from './Components/HealthPage/pages/Home.js';
import UserHospital from './Components/HealthPage/pages/UserHospital.js'
import UserPharmacy from './Components/HealthPage/pages/UserPharmacy.js'
import AdminHealth from './Components/HealthPage/pages/AdminLogin.js';
import Hospital from './Components/HealthPage/pages/Hospital.js';
import Pharmacy from './Components/HealthPage/pages/Pharmacy.js';
import TourismHome from './Components/TourismPage/Home.js';
import Tour from './Components/TourismPage/Tour.js';
import AdminTourism from './Components/TourismPage/Tourism.js';
import EditCurrentHotSpot from './Components/TourismPage/EditCurrentHotSpot.js';
import EditHistoricalPlaces from './Components/TourismPage/EditHistoricalPlaces.js';
import ViewHistoricalPlaces from './Components/TourismPage/ViewHistoricalPlaces.js';
import UpdateHistoricalPlaces from './Components/TourismPage/UpdateHistoricalPlaces.js';
import AddHistoricalPlaces from './Components/TourismPage/AddHistoricalPlaces.js';
import ViewCurrentHotSpot from './Components/TourismPage/ViewCurrentHotSpot.js';
import UpdateCurrentHotSpot from './Components/TourismPage/UpdateCurrentHotSpot.js';
import AddCurrentHotSpot from './Components/TourismPage/AddCurrentHotSpot.js';

function App() {
  return (
    <>
      <Router>
      <div className="bg-info text-center pt-2 pb-2">
            <h6><a href="https://www.covid19india.org/state/CH" className="text-white" target="_blank" rel="noopener noreferrer">
                <b>&#x1F6C8;<u> Get the latest COVID-19 information </u></b>
          </a></h6>
          <h6><a href="http://chdpr.gov.in/dashboard/?q=node/82298" className="text-white" target="_blank" rel="noopener noreferrer">
                <b>&#x1F6C8;<u>Information on COVID_19 Zones</u></b>
            </a></h6>
                
        </div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          {/* EVENTS */}
          <Route path="/events" component={ListEvents} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/admin_event" component={AdminEvent} />
          <Route path="/update_event" component={UpdateEvent} />
          <Route path="/create_event" component={CreateEvent} />
          <Route path="/user_details" component={ViewUser} />

          {/* LOGIN */}
          <Route path="/admin_login" component={LoginComponent} />

          {/* TRANSPORT */}
          <Route path="/transport" component={Transport} />

          {/* EDUCATION */}
          <Route exact path="/education" component={Education}/>
          <Route exact path="/schools/view/:id" component={ViewSchool}/>
          <Route exact path="/colleges/view/:id" component={ViewCollege}/>
          <Route exact path="/schools/update/:id" component={UpdateSchool}/>
          <Route exact path="/colleges/update/:id" component={UpdateCollege}/>
          <Route exact path="/schools/add" component={AddSchool}/>
          <Route exact path="/colleges/add" component={AddCollege}/>
          <Route exact path="/edit-schools" component={EditSchools} />
          <Route exact path="/edit-colleges" component={EditColleges}/>
          <Route exact path="/all-schools" component={AllSchools}/>
          <Route exact path="/all-colleges" component={AllColleges} />
          <Route exact path="/admin_education" component={EducationAdmin} />

          
          {/* ENTERTAINMENT */}
          <Route path="/funNDine" component={RestaurantHome} />
          <Route path="/userrestaurant" component={UserRestaurant} />
          <Route path='/usermalls' component={UserMalls} />
          <Route path='/userparks' component={UserParks} />
          <Route path='/admin_funndine' component={Admin} />
          <Route path='/malls' component={Malls} />
          <Route path='/parks' component={Parks} />
          <Route path='/restaurant' component={Restaurants} />


          {/* HEALTH */}
          <Route path='/health' component={HealthHome} />
          <Route path='/userhospital' component={UserHospital} />
          <Route path='/userpharmacy' component={UserPharmacy} />
          <Route path='/admin_health' component={AdminHealth} />
          <Route path='/hospital' component={Hospital} />
          <Route path='/pharmacy' component={Pharmacy} />

          {/* TOURISM */}
          <Route path='/tourism' component={TourismHome} />
          <Route path='/tour' component={Tour} />
          <Route path='/admin_tourism' component={AdminTourism} />
          <Route path='/currentHotspot' component={EditCurrentHotSpot} />
          <Route path='/historicalPlaces' component={EditHistoricalPlaces} />
          <Route exact path="/view/historicalHotspot" component={ViewHistoricalPlaces}/>
          <Route exact path="/update/historicalHotspot" component={UpdateHistoricalPlaces} />
          <Route exact path="/addHistoricalPlaces" component={AddHistoricalPlaces} />
          <Route exact path="/view/currenthotspot" component={ViewCurrentHotSpot}/>
          <Route exact path="/update/currentHotspot" component={UpdateCurrentHotSpot} />
          <Route exact path="/addCurrentHotSpot" component={AddCurrentHotSpot} />
          



        </Switch>
      </Router>
    </>
  );
}

export default App;
