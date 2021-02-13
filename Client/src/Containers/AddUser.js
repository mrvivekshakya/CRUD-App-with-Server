import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addUserAction} from '../Actions/index';
import GenderComponent from '../Components/AddUser Components/GenderComponent';
import InputwithLable from '../Components/AddUser Components/InputwithLabel';
import Option from '../Components/AddUser Components/Option';
import RadiowithLabel from '../Components/AddUser Components/RadiowithLabel';
import SelectwithLabel from '../Components/AddUser Components/SelectwithLabel';


class AddUser extends React.Component{
    constructor(props){
        super(props);
        //this.state = {fname:null,index:this.props.id}
    }
    changeHandler = event => {

        let nam = event.target.name;
        let val = event.target.value;
        this.setState({gender:"Male"});
        this.setState({[nam]:val});

    }
    submitHandler = event => {
        event.preventDefault();
        this.props.addU(this.state);

        alert("User is Added Successfully...");
    }
    render() {
        return (
             <>
                <div className="container-fluid ">
                    <form onSubmit={e => this.submitHandler(e)}>
                        <div className="row">
                            <div className="col-sm-6">
                                <InputwithLable forLabel="fnmae" label="First Name" type="text" name="fname" placeholder="Enter First name" onchange={this.changeHandler} />
                            </div>
                            <div className="col-sm-6">
                                <InputwithLable forLabel="lname" label="Last Name" type="text" name="lname" placeholder="Enter Last name" onchange={this.changeHandler} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <InputwithLable forLabel="email" label="E-Mail Address" type="email" name="email" placeholder="Enter Email Address" onchange={this.changeHandler} />
                            </div>
                            <div className="col-sm-6">
                                <InputwithLable forLabel="password" label="Password" type="password" name="password" placeholder="Enter Your Password" onchange={this.changeHandler} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                           <GenderComponent  onchange={this.changeHandler}/>
                        </div>
                        <div className="col-sm-6">
                            <SelectwithLabel forLabel="department" label="Department"  name="department" onchange={this.changeHandler} />
                        </div>
                        <div className="form-group">
                            {/* <label for="address">Address</label> */}
                            <textarea name="message" placeholder="Enter Your Address Here..." style={{width:"100%"}} rows="10" onChange={e => this.changeHandler(e)}></textarea>
                        </div>
                        <input type="submit" value="Add User" className="btn btn-block btn-primary" />
                    </form>
                </div>
             </>
        );
    }
}

function mapStateToProps(state) {
    return{
        users : state.userReducer,
        id : state.setIdReducer
    }
}

function matchDispatchToProps(dispatch){
    return {
        addU: (data) => dispatch(addUserAction(data))
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(AddUser);