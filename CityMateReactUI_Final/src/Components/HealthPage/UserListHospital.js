import React, { Component } from 'react'
import '../../App.css';
import HospitalApiService from "../../Services/HospitalApiService";

class ListHospital extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hospitals: [],
            message: null
        }
        
        this.reloadHospitalList = this.reloadHospitalList.bind(this);
    }

    componentDidMount() {
        this.reloadHospitalList();
    }

    reloadHospitalList() {
        HospitalApiService.fetchHospitals()
            .then((res) => {
                this.setState({hospitals: res.data.result})
                console.log(this.state.hospitals);
            });
    }
    
    

    render() {
        return (
            
            <div className='container-fluid'>
            <div class="table-responsive">
           <table class="table table-striped table-hover table-borderless table-dark ">
    <thead className="table-font">
                        <tr>
                           {/* <th className="hidden">Id</th> */}
                            <th>Hospital Logo</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Covid Center</th>
                            <th>Category</th>
                            <th>OPD-Start</th>
                            <th>OPD-End</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hospitals.map(
                        hospital =>
                        <tr key={hospital.id}>
                            <td><img class="opacity" alt="timer" src={hospital.imgPath} height={80} width={100}/></td>
                                        <td>{hospital.name}</td>
                                        <td>{hospital.description}</td>
                                        <td>{hospital.address}</td>
                                        <td>{hospital.phoneNum}</td>
                                        <td>{(hospital.covidCenter).toString()}</td>
                                        <td>{hospital.category}</td>
                                        <td>{hospital.opdTimeStart}</td>
                                        <td>{hospital.opdTimeEnd}</td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
    </div>
    
        );
    }

}

export default ListHospital;