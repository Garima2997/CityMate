import React, { Component } from 'react'
import PharmacyApiService from "../../Services/PharmacyApiService.js";
import './form.css';

class AddPharmacyComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            address:'',
            phoneNum:'',
            pincode:'',
            openingTime:'',
            closingTime:'',
            message: null
        }
        this.savePharmacy = this.savePharmacy.bind(this);
    }

    savePharmacy = (e) => {
        e.preventDefault();
        let pharmacy = {name: this.state.name, address: this.state.address,phoneNum: this.state.phoneNum,pincode:this.state.pincode,openingTime:this.state.openingTime,closingTime:this.state.closingTime};
        PharmacyApiService.addPharmacy(pharmacy)
            .then(res => {
                this.setState({message : 'Pharmacy added successfully.'});
                this.props.history.push('/pharmacy');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className='pharm_form'>
                <div className="container">
        <form class="form-horizontal" className="form-bg">
        <h2 align='center'>Add Pharmacy</h2>
        <div class="form-group">
                <label for="name" class="col-sm-3 control-label">Name</label>
                <div class="col-sm-9">
                <input type="text" placeholder="Pharmacy Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>               
            </div>
            <div class="form-group">
                <label for="address" class="col-sm-3 control-label">Address</label>
                <div class="col-sm-9">
                <input type="text" placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                </div>
                
            </div>
            <div class="form-group ">
                <label for="phoneNum" class="col-sm-3 control-label">Contact no.</label>
                <div class="col-sm-9">
                <input type="text" placeholder="Contact number" name="phoneNum" className="form-control" value={this.state.phoneNum} onChange={this.onChange}/>
                </div>
                
            </div>
        
            <div class="form-group ">
                <label for="pincode" class="col-sm-3 control-label">Pincode</label>
                <div class="col-sm-9">
                <input type="number" placeholder="zipcode" name="pincode" className="form-control" value={this.state.pincode} onChange={this.onChange}/>
                </div>
            </div>
           <div class="form-group">
                <label for="openingTime" class="col-sm-3 control-label">Opening Timing</label>
                <div class="col-sm-9">
                <input type="time"  name="openingTime" className="form-control" value={this.state.openingTime} onChange={this.onChange}/>
                </div>
           </div>
           <div class="form-group">
                <label for="closingTime" class="col-sm-3 control-label">Closing Timing</label>
                <div class="col-sm-9">
                <input type="time"  name="closingTime" className="form-control" value={this.state.closingTime} onChange={this.onChange}/>
                </div>
           </div>
            <div class="col-sm-3">
                <button className="btn btn-success" onClick={this.savePharmacy}>Save</button>
                </div>

        </form>
    </div>
            </div>
        )
    }
}
        

export default AddPharmacyComponent;