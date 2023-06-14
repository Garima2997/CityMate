import React, { Component } from 'react'
import MallsApiService from "../../Services/MallsApiService.js"


class EditMalls extends Component {
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
        this.saveMalls = this.saveMalls.bind(this);
        this.loadMalls = this.loadMalls.bind(this);
    }

    componentDidMount() {
        this.loadMalls();
    }

    loadMalls() {
        MallsApiService.fetchMallsById(window.localStorage.getItem("id"))
        .then((res) => {
            let malls = res.data.result;
            this.setState({id: malls.id,
                imgPath: malls.imgPath,
                name: malls.name,
                address: malls.address,
                phoneNum: malls.phoneNum,
                openingTime: malls.openingTime,
                closingTime: malls.closingTime,

            })
        });
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    saveMalls = (e) => {
        e.preventDefault();
        let malls = {id:this.state.id, imgPath: this.state.imgPath,name: this.state.name,address: this.state.address,phoneNum: this.state.phoneNum,
            openingTime: this.state.openingTime,closingTime: this.state.closingTime };

    MallsApiService.editMalls(malls).then(res => {
        this.setState({message : 'Malls added successfully'});
        this.props.history.push('/malls');
    });

    }

  



    render() {
        return (
            <div>
                <div class="container-fluid border border-dark pt-5 pb-5 pl-5">
        <div>
            <h2>Edit Mall</h2>
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


export default EditMalls
