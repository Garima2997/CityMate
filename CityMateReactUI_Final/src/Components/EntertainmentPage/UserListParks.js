import React, { Component } from 'react'
import ParksApiService from '../../Services/ParksApiService';
import '../../App.css';

class UserListParks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parks: [],
            name:"",
            message: null
        }
        
        this.reloadParksList = this.reloadParksList.bind(this);

    }

    componentDidMount() {
        this.reloadParksList();
    }

    reloadParksList() {
        ParksApiService.fetchParks()
            .then((res) => {
                this.setState({parks: res.data.result})
                console.log(this.state.parks);
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
                {/* <h2 className="text-center">Parks Details</h2> */}
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
                            this.state.parks.filter((result)=>{
                                if(result.name === this.state.name){
                                    return result;
                                }else if (this.state.name==="") {
                                    return result; }}).map(
                                parks => 
                                <tr key={parks.id}>
                                    {/* <td>{parks.id}</td> */}
                                    <td><img alt="timer" src={parks.imgPath} height={150} width={150} className="image"/></td>
                                    <td>{parks.name}</td>
                                    <td className="cell">{parks.address}</td>
                                    <td>{parks.phoneNum}</td>
                                    <td>{parks.openingTime}</td>
                                    <td>{parks.closingTime}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div></div>
        );
    }
}

export default UserListParks;
