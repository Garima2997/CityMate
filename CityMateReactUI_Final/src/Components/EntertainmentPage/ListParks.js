import React, { Component } from 'react'
import ParksApiService from '../../Services/ParksApiService';
import '../../App.css';

class ListParks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parks: [],
            message: null
        }
        
        this.deleteParks = this.deleteParks.bind(this);
        this.editParks = this.editParks.bind(this);
        this.addParks = this.addParks.bind(this);
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

    deleteParks(id) {
        ParksApiService.deleteParks(id).then(res => {
            this.setState({message : 'Parks deleted successfully'});
            this.setState({parks: this.state.parks.filter(parks => parks.id !== id)});
        })
    }

    editParks(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-parks');
    }

    addParks() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-parks');
    }

    render() {
        return (
            <div>
                {/* <h2 className="text-center">Parks Details</h2> */}
                <button className="btn btn-danger"  onClick={() => this.addParks()}> Add Parks</button>
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
                            this.state.parks.map(
                                parks => 
                                <tr key={parks.id}>
                                    <td>{parks.id}</td>
                                    <td><img alt="timer" src={parks.imgPath} height={200} width={200}/></td>
                                    <td>{parks.name}</td>
                                    <td className="cell">{parks.address}</td>
                                    <td>{parks.phoneNum}</td>
                                    <td>{parks.openingTime}</td>
                                    <td>{parks.closingTime}</td>
                                    <td>
                                    <button className="btn btn-success" onClick={() => this.deleteParks(parks.id)}>Delete</button>
                                    <button className="btn btn-success" onClick={() => this.editParks(parks.id)} style={{marginLeft: '20px'}}> Edit</button>
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

export default ListParks;
