import React, { Component } from 'react'
import ApiService from "../../Services/RestaurantApiService"


class EditRestaurant extends Component {
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
        this.saveRestaurant = this.saveRestaurant.bind(this);
        this.loadRestaurant = this.loadRestaurant.bind(this);
    }

    componentDidMount() {
        this.loadRestaurant();
    }

    loadRestaurant() {
        ApiService.fetchRestaurantById(window.localStorage.getItem("id"))
        .then((res) => {
            let restaurant = res.data.result;
            this.setState({id: restaurant.id,
                imgPath: restaurant.imgPath,
                name: restaurant.name,
                address: restaurant.address,
                phoneNum: restaurant.phoneNum,
                openingTime: restaurant.openingTime,
                closingTime: restaurant.closingTime,

            })
        });
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    saveRestaurant = (e) => {
        e.preventDefault();
        let restaurant = {id:this.state.id, imgPath: this.state.imgPath, name: this.state.name,address: this.state.address,phoneNum: this.state.phoneNum,
            openingTime: this.state.openingTime,closingTime: this.state.closingTime };

    ApiService.editRestaurant(restaurant).then(res => {
        this.setState({message : 'Entertainment added successfully'});
        this.props.history.push('/restaurant');
    });

    }

  



    render() {
        return (
            <div>
                <div class="container-fluid border border-dark pt-5 pb-5 pl-5">
        <div>
            <h2>Add new Restaurant</h2>
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
                <button className="btn btn-success" onClick={this.saveRestaurant}>Save</button>
                </div>
            </div>

        </form>
    </div>
            </div>
        )
    }
}


export default EditRestaurant
