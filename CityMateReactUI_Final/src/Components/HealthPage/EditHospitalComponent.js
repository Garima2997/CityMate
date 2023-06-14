import React, { Component } from 'react'
import HospitalApiService from "../../Services/HospitalApiService";

class EditHospitalComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id:'',
            imgPath:'',
            name: '',
            address:'',
            phoneNum:'',
            covidCenter:'',
            category:'',
            opdTimeStart:'',
            opdTimeEnd:'',
            description:'',
            message: null
        }
        this.saveHospital = this.saveHospital.bind(this);
        this.loadHospital = this.loadHospital.bind(this);
    }

    componentDidMount() {
        this.loadHospital();
    }

    loadHospital() {
        HospitalApiService.fetchHospitalById(window.localStorage.getItem("hospId"))
            .then((res) => {
                let hospital = res.data.result;
                this.setState({
                id: hospital.id,
                imgPath: hospital.imgPath,
                name: hospital.name,
                address:hospital.address,
                phoneNum:hospital.phoneNum,
                covidCenter:hospital.covidCenter,
                category:hospital.category,
                opdTimeStart:hospital.opdTimeStart,
                opdTimeEnd:hospital.opdTimeEnd,
                description:hospital.description
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveHospital = (e) => {
        e.preventDefault();
       let hospital = {id: this.state.id, imgPath: this.state.imgPath, name: this.state.name, address: this.state.address,phoneNum: this.state.phoneNum,covidCenter:this.state.covidCenter,category:this.state.category,opdTimeStart:this.state.opdTimeStart,opdTimeEnd:this.state.opdTimeEnd,description:this.state.description};
       
       HospitalApiService.editHospital(hospital).then(res => {
                this.setState({message : 'Hospital added successfully.'});
                this.props.history.push('/hospital');
            });
    }

    render() {
        return (
            <div className='hosp_form'>
                <div className="container">
        <form class="form-horizontal" className="form-bg">
        <h2 align='center'>Edit Hospital Details</h2>
        <div class="form-group">
               <label for="name" class="col-sm-3 control-label">Image Path</label>
                <div class="col-sm-9">
                <input type="text" placeholder="images/image.jpg" name="imgPath" className="form-control" value={this.state.imgPath} onChange={this.onChange}/>
                </div>               
                </div>
            <div class="form-group">
                <label for="name" class="col-sm-3 control-label">Name</label>
                <div class="col-sm-9">
                <input type="text" placeholder="Hospital Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>               
            </div>
            <div class="form-group">
                <label for="address" class="col-sm-3 control-label">Address</label>
                <div class="col-sm-9">
                <input type="text" placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                </div>
                
            </div>
            <div class="form-group ">
                <label for="phoneNum" class="col-sm-3 control-label">Contact no.</label>
                <div class="col-sm-9">
                <input type="text" placeholder="Contact number" name="phoneNum" className="form-control" value={this.state.phoneNum} onChange={this.onChange}/>
                </div>
                
            </div>
            <div class="form-group ">
               <label for="covidCenter" class="col-sm-3 control-label">Covide Center</label>
                <div class="col-sm-9">
                <input placeholder="true/false" name="covidCenter" className="form-control" value={this.state.covidCenter} onChange={this.onChange}/>
                </div>
            </div>
           <div class="form-group">
                <label for="category" class="col-sm-3 control-label">Category</label>
                <div class="col-sm-9">
                <input type="text" placeholder="category eg. Multi Speciality" name="category" className="form-control" value={this.state.category} onChange={this.onChange}/>
                </div>
           </div>
           <div class="form-group">
                <label for="opdTimeStart" class="col-sm-3 control-label">OPD Start Timing</label>
                <div class="col-sm-9">
                <input type="time"  name="opdTimeStart" className="form-control" value={this.state.opdTimeStart} onChange={this.onChange}/>
                </div>
           </div>
           <div class="form-group">
                <label for="opdTimeEnd" class="col-sm-3 control-label">OPD End Timing</label>
                <div class="col-sm-9">
                <input type="time"  name="opdTimeEnd" className="form-control" value={this.state.opdTimeEnd} onChange={this.onChange}/>
                </div>
           </div>
           <div class="form-group">
                <label for="description" class="col-sm-3 control-label">Description</label>
                <div class="col-sm-9">
                <textarea rows="4" cols="50" placeholder="Enter text here..." name="description" value={this.state.description} onChange={this.onChange}></textarea>
                </div>
           </div>
            <div class="col-sm-3" >
                <button className="btn btn-success" onClick={this.saveHospital}>Update</button>
                </div>
    

        </form>
        
    </div>
            </div>
        )
    }
}
        

export default EditHospitalComponent;