import React, { Component } from 'react'
import ApiService from '../../Services/RestaurantApiService';
import '../../App.css';

class ListRestaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurant: [],
            name:"",
            message: null
        }
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
    
    search = (e) => {
        e.preventDefault();
    
        this.setState({
         name:document.getElementById("name").value,
              
        });
        
      };
    
 

    render() {
        return (
            <div className='container-fluid'>
                 <form>
                <input
                  type="text"
                  placeholder="search by name"
                  id="name"
                  size="30"
                  name="name"
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
                {/* <h2 className="text-center">Restaurant and Cafe's Details</h2> */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th className="hidden">Id</th> */}
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

                            this.state.restaurant.filter((result)=>{
                                if(result.name === this.state.name){
                                    return result;
                                } else if (this.state.name==="") {
                                    return result; }}).map(
                                restaurant => 
                                <tr key={restaurant.id}>
                                    {/* <td>{restaurant.id}</td> */}
                                    <td><img alt="timer" src={restaurant.imgPath} height={150} width={150} className="image"/></td>
                                    <td>{restaurant.name}</td>
                                    <td className="cell">{restaurant.address}</td>
                                    <td>{restaurant.phoneNum}</td>
                                    <td>{restaurant.openingTime}</td>
                                    <td>{restaurant.closingTime}</td>
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div></div>
        );
    }
}

export default ListRestaurant;
