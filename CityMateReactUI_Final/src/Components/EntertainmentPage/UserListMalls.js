import React, { Component } from 'react'
import MallsApiService from '../../Services/MallsApiService';
import '../../App.css';

class UserListMalls extends Component {

    constructor(props) {
        super(props)
        this.state = {
            malls: [],
            name:"",
            message: null
        }
        
        this.reloadMallsList = this.reloadMallsList.bind(this);

    }

    componentDidMount() {
        this.reloadMallsList();
    }

    reloadMallsList() {
        MallsApiService.fetchMalls()
            .then((res) => {
                this.setState({malls: res.data.result})
                console.log(this.state.malls);
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
                {/* <h2 className="text-center">Malls Details</h2> */}
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
                        
                        this.state.malls.filter((result)=>{
                                if(result.name === this.state.name){
                                    return result;
                                } else if (this.state.name==="") {
                                    return result; }}).map(
                                malls => 
                                <tr key={malls.id}>
                                    {/* <td>{malls.id}</td> */}
                                    <td><img alt="timer" src={malls.imgPath} height={150} width={150} className="image"/></td>
                                    <td>{malls.name}</td>
                                    <td className="cell">{malls.address}</td>
                                    <td>{malls.phoneNum}</td>
                                    <td>{malls.openingTime}</td>
                                    <td>{malls.closingTime}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div></div>
        );
    }
}

export default UserListMalls;
