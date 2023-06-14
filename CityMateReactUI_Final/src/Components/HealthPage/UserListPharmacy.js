import React, { Component } from 'react'
import PharmacyApiService from "../../Services/PharmacyApiService";


class ListPharmacy extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pharmacy:[],
            pincode:"",
            search:null
             } 
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
    search = (e) => {
        e.preventDefault();
    
        this.setState({
         // search: e.target.value,
         pincode:document.getElementById("pincode").value,
              
        });
        
      };
    
    
    render() {
        return (
            <div className='container-fluid'>
                <form>
                <input
                  type="text"
                  placeholder="search by pincode"
                  id="pincode"
                  size="55"
                  name="pincode"
                />
                <span></span>
                <button
                  className="btn btn-outline-success btn-sm "
                  type="submit"
                  onClick={this.search}
                >
                  Search
                </button>
                </form>
            <div className="table-responsive">
           <table className="table table-striped table-hover table-borderless table-dark ">
                <thead>
                        <tr>
                           {/* <th className="hidden">Id</th> */}
                            <th >Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Pincode</th>
                            <th>OpeningTime</th>
                            <th>Closing Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                this.state.pharmacy.filter((result)=>{
                                if (result.pincode === parseInt(this.state.pincode,10)) {
                                    return result;
                                  }
                                  else if (this.state.pincode==="") {
                                    return result; }}).map(
                                pharmacy =>
                        <tr key={pharmacy.id}>
                                        <td>{pharmacy.name}</td>
                                        <td>{pharmacy.address}</td>
                                        <td>{pharmacy.phoneNum}</td>
                                        <td>{pharmacy.pincode}</td>
                                        <td>{pharmacy.openingTime}</td>
                                        <td>{pharmacy.closingTime}</td>

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

export default ListPharmacy;