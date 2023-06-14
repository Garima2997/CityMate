import React, { Component } from 'react'
import ParksApiService from "../../Services/ParksApiService"


class EditParks extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: '',
            imgPath: '',
            name: '',
            address: '',
            phoneNum: '',
            openingTime: '',
            closingTime: '',
            message: null

        }
        this.saveParks = this.saveParks.bind(this);
        this.loadParks = this.loadParks.bind(this);
    }

    componentDidMount() {
        this.loadParks();
    }

    loadParks() {
        ParksApiService.fetchParksById(window.localStorage.getItem("id"))
        .then((res) => {
            let parks = res.data.result;
            this.setState({id: parks.id,
                imgPath: parks.imgPath,
                name: parks.name,
                address: parks.address,
                phoneNum: parks.phoneNum,
                openingTime: parks.openingTime,
                closingTime: parks.closingTime,

            })
        });
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    saveParks = (e) => {
        e.preventDefault();
        let parks = {id:this.state.id, imgPath: this.state.imgPath,name: this.state.name,address: this.state.address,phoneNum: this.state.phoneNum,
            openingTime: this.state.openingTime,closingTime: this.state.closingTime };

    ParksApiService.editParks(parks).then(res => {
        this.setState({message : 'Parks added successfully'});
        this.props.history.push('/parks');
    });

    }

  



    render() {
        return (
            <div>
                <div class="container-fluid border border-dark pt-5 pb-5 pl-5">
        <div>
            <h2>Edit Park</h2>
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
                <button className="btn btn-success" onClick={this.saveParks}>Save</button>
                </div>
            </div>

        </form>
    </div>
            </div>
        )
    }
}


export default EditParks
