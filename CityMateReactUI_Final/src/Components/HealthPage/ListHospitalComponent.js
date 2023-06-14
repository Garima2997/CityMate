import React, { Component } from 'react'
import HospitalApiService from "../../Services/HospitalApiService";

class ListHospitalComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hospitals: [],
            message: null
        }
        this.deleteHospital = this.deleteHospital.bind(this);
        this.editHospital = this.editHospital.bind(this);
        this.addHospital = this.addHospital.bind(this);
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

    deleteHospital(hospId) {
        HospitalApiService.deleteHospital(hospId)
           .then(res => {
               this.setState({message : 'Hospital deleted successfully.'});
               this.setState({hospitals: this.state.hospitals.filter(hospital => hospital.id !== hospId)});
           })

    }

    editHospital(id) {
        window.localStorage.setItem("hospId", id);
        this.props.history.push('/edit-hospital');
    }

    addHospital() {
        window.localStorage.removeItem("hospId");
        this.props.history.push('/add-hospital');
    }

    render() {
        return (
            <div container-fluid> 
                {/* <h2 className="text-center">Hospital Details</h2> */}
                <button className="btn btn-danger" onClick={() => this.addHospital()}> Add hospital</button>
                <table className="table table-striped table-bordered">
                    <thead >
                        <tr>
                           {/* <th className="hidden">Id</th> */}
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Covid Center</th>
                            <th>Category</th>
                            <th>OPD Start Time</th>
                            <th>OPD End Time</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hospitals.map(
                        hospital =>
                        <tr key={hospital.id}>
                                        <td>{hospital.name}</td>
                                        <td>{hospital.address}</td>
                                        <td>{hospital.phoneNum}</td>
                                        <td>{(hospital.covidCenter).toString()}</td>
                                        <td>{hospital.category}</td>
                                        <td>{hospital.opdTimeStart}</td>
                                        <td>{hospital.opdTimeEnd}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteHospital(hospital.id)}> Delete</button>
                                            <button className="btn btn-primary" onClick={() => this.editHospital(hospital.id)}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListHospitalComponent;