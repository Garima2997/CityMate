import React, { Component } from 'react'
import ApiService from '../../Services/RestaurantApiService';
import '../../App.css';

class ListRestaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurant: [],
            message: null
        }
        
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
        this.editRestaurant = this.editRestaurant.bind(this);
        this.addRestaurant = this.addRestaurant.bind(this);
        this.reloadRestaurantList = this.reloadRestaurantList.bind(this);

    }

    componentDidMount() {
        this.reloadRestaurantList();
    }

    reloadRestaurantList() {
        ApiService.fetchRestaurant()
            .then((res) => {
                this.setState({restaurant: res.data.result})
                console.log(this.state.restaurant);
            });
    }

    deleteRestaurant(id) {
        ApiService.deleteRestaurant(id).then(res => {
            this.setState({message : 'Restaurant deleted successfully'});
            this.setState({restaurant: this.state.restaurant.filter(restaurant => restaurant.id !== id)});
        })
    }

    editRestaurant(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-restaurant');
    }

    addRestaurant() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-restaurant');
    }

    render() {
        return (
            <div>
                {/* <h2 className="text-center">Restaurant Details</h2> */}
                <button className="btn btn-danger" onClick={() => this.addRestaurant()}> Add Restaurant</button>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Mobile no.</th>
                            <th>Opening Time</th>
                            <th>Closing Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.restaurant.map(
                                restaurant => 
                                <tr key={restaurant.id}>
                                    <td>{restaurant.id}</td>
                                    <td><img alt="timer" src={restaurant.imgPath} height={200} width={200}/></td>
                                    <td>{restaurant.name}</td>
                                    <td className="cell">{restaurant.address}</td>
                                    <td>{restaurant.phoneNum}</td>
                                    <td>{restaurant.openingTime}</td>
                                    <td>{restaurant.closingTime}</td>
                                    <td>
                                    <button className="btn btn-success" onClick={() => this.deleteRestaurant(restaurant.id)}>Delete</button>
                                    <button className="btn btn-success" onClick={() => this.editRestaurant(restaurant.id)} style={{marginLeft: '20px'}}> Edit</button>
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

export default ListRestaurant;
