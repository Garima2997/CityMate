import React, { Component } from 'react'
import MallsApiService from '../../Services/MallsApiService';
import '../../App.css';

class ListMalls extends Component {

    constructor(props) {
        super(props)
        this.state = {
            malls: [],
            message: null
        }
        
        this.deleteMalls = this.deleteMalls.bind(this);
        this.editMalls = this.editMalls.bind(this);
        this.addMalls = this.addMalls.bind(this);
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

    deleteMalls(id) {
        MallsApiService.deleteMalls(id).then(res => {
            this.setState({message : 'Malls deleted successfully'});
            this.setState({malls: this.state.malls.filter(malls => malls.id !== id)});
        })
    }

    editMalls(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-malls');
    }

    addMalls() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-malls');
    }

    render() {
        return (
            <div>
                {/* <h2 className="text-center">Malls Details</h2> */}
                <button className="btn btn-danger"  onClick={() => this.addMalls()}> Add Malls</button>
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
                            this.state.malls.map(
                                malls => 
                                <tr key={malls.id}>
                                    <td>{malls.id}</td>
                                    <td><img alt="timer" src={malls.imgPath} height={200} width={200}/></td>
                                    <td>{malls.name}</td>
                                    <td className="cell">{malls.address}</td>
                                    <td>{malls.phoneNum}</td>
                                    <td>{malls.openingTime}</td>
                                    <td>{malls.closingTime}</td>
                                    <td>
                                    <button className="btn btn-success" onClick={() => this.deleteMalls(malls.id)}>Delete</button>
                                    <button className="btn btn-success" onClick={() => this.editMalls(malls.id)} style={{marginLeft: '20px'}}> Edit</button>
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

export default ListMalls;
