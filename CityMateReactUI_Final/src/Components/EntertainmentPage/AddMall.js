import React, { Component } from 'react'
import MallsApiService from "../../Services/MallsApiService.js";

class AddMalls extends Component {

    constructor(props) {
        super(props);
        this.state ={
            name: '',
            imgPath: '',
            address:'',
            phoneNum:'',
            openingTime: '',
            closingTime:'',
            message: null

        }
        this.saveMalls = this.saveMalls.bind(this);
    }

    saveMalls = (e) => {
        e.preventDefault();
        let malls = {imgPath: this.state.imgPath,name: this.state.name, address: this.state.address,phoneNum: this.state.phoneNum,openingTime:this.state.openingTime,
            closingTime:this.state.closingTime};
        MallsApiService.addMalls(malls)
            .then(res => {
                this.setState({message : 'Mall added successfully.'});
                this.props.history.push('/malls');
            });
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });



    render() {
        return (
            <div>
                <div class="container-fluid border border-dark pt-5 pb-5 pl-5">
        <div>
            <h2>Add new Mall</h2>
        </div>
        <form>
        <div class="form-group row">
                <div class="col-4">
                <label for="name">Image path</label>
                </div>
                <div class="col-6">
                    <input type="text" className="form-control" name="imgPath" placeholder="/user/image.jpg" value={this.state.imgPath} onChange={this.onChange}/>
                </div>               
            </div>
            <div class="form-group row">
                <div class="col-4">
                <label for="name">Name</label>
                </div>
                <div class="col-6">
                    <input type="text" className="form-control" name="name" placeholder="name" value={this.state.name} onChange={this.onChange}/>
                </div>               
            </div>
            <div class="form-group row">
                <div class="col-4">
                <label for="address">Address</label>
                </div>
                <div class="col-6">
                <input type="text" className="form-control" name="address" placeholder="address" value={this.state.address} onChange={this.onChange}/>
                </div>
                
            </div>
            <div class="form-group row">
                <div class="col-4">
                <label for="phoneNum">Contact no.</label>
                </div>
                <div class="col-6">
                <input type="text" className="form-control" name="phoneNum" placeholder="phoneNum" value={this.state.phoneNum} onChange={this.onChange}/>
                </div>
                
            </div>
        
            <div class="form-group row">
                <div class="col-4">
                <label for="openingTime">Opening Time</label>
                </div>
                <div class="col-6">
                <input type="time" name="openingTime" className="form-control" placeholder="openingTime" value={this.state.openingTime} onChange={this.onChange}/>
                </div>
            </div>
           <div class="form-group row">
                <div class="col-4">
                <label for="closingTime">Closing Time</label>
                </div>
                <div class="col-6">
                <input type="time" name="closingTime" className="form-control" placeholder="closingTime" value={this.state.closingTime} onChange={this.onChange}/>
                </div>
           </div>
            <div class="row">
                <div class="col-4">
                <button className="btn btn-success" onClick={this.saveMalls}>Save</button>
                </div>
            </div>

        </form>
    </div>
            </div>
        )
    }
}

export default AddMalls
