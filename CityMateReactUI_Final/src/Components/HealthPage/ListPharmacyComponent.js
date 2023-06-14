import React, { Component } from 'react'
import PharmacyApiService from "../../Services/PharmacyApiService";

class ListPharmacyComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pharmacy: [],
            message: null
        }
        this.deletePharmacy = this.deletePharmacy.bind(this);
        this.editPharmacy = this.editPharmacy.bind(this);
        this.addPharmacy = this.addPharmacy.bind(this);
        this.reloadPharmacyList = this.reloadPharmacyList.bind(this);
    }

    componentDidMount() {
        this.reloadPharmacyList();
    }

    reloadPharmacyList() {
        PharmacyApiService.fetchPharmacy()
            .then((res) => {
                this.setState({pharmacy: res.data.result})
                console.log(this.state.pharmacy);
            });
    }

    deletePharmacy(phId) {
        PharmacyApiService.deletePharmacy(phId)
           .then(res => {
               this.setState({message : 'Pharmacy deleted successfully.'});
               this.setState({pharmacy: this.state.pharmacy.filter(pharmacy => pharmacy.id !== phId)});
           })

    }

    editPharmacy(id) {
        window.localStorage.setItem("phId", id);
        this.props.history.push('/edit-pharmacy');
    }

    addPharmacy() {
        window.localStorage.removeItem("phId");
        this.props.history.push('/add-pharmacy');
    }

    render() {
        return (
            <div>
                {/* <h2 className="text-center">Pharmacy Details</h2> */}
                <button className="btn btn-danger"  onClick={() => this.addPharmacy()}> Add Pharmacy</button>
                 <table className="table table-striped table-bordered" >
                    <thead >
                        <tr>
                           {/* <th className="hidden">Id</th> */}
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Pincode</th>
                            <th>OpeningTime</th>
                            <th>Closing Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pharmacy.map(
                                pharmacy =>
                        <tr key={pharmacy.id}>
                                        <td>{pharmacy.name}</td>
                                        <td>{pharmacy.address}</td>
                                        <td>{pharmacy.phoneNum}</td>
                                        <td>{pharmacy.pincode}</td>
                                        <td>{pharmacy.openingTime}</td>
                                        <td>{pharmacy.closingTime}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deletePharmacy(pharmacy.id)}> Delete</button>
                                            <button className="btn btn-primary" onClick={() => this.editPharmacy(pharmacy.id)} style={{marginLeft: '20px'}}> Edit</button>
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

export default ListPharmacyComponent;