import React from 'react';
import { connect } from 'react-redux';
import { updateUserAction, setIdAction, getUsersAction,addUserAction,removeUserAction,getUserAction } from '../Actions';
import NoUser from '../Components/NoUser'
import InputwithLable from '../Components/AddUser Components/InputwithLabel';
import GenderComponent from '../Components/AddUser Components/GenderComponent';
import SelectwithLabel from '../Components/AddUser Components/SelectwithLabel';
import UserId from '../Components/UpdateUser Components/UserId';    


class UpdateUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {id: 0,user: [], users: [], fname: null, lname: null, email: null, password: null, gender: null, department: null,message: null};
    }
    changeId = event => {
        this.setState({index : parseInt(event.target.value)});
        this.props.getUser(this.state.index)
        this.props.setId(this.state.index);
    }
    changeHandler = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({gender:"male"});
        this.setState({[nam]:val});

    }
    componentWillMount() {
        this.props.getUsers();
    }
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.users.usersFetched){
            if(nextProps.users.users.length>0){
                this.setState({users : nextProps.users.users},()=>{  
                })     
                this.setState({index: nextProps.users.users[0].id})
                this.setState({id: nextProps.users.users[0].id})
                if(this.state.id == 0){
                    this.props.getUser(nextProps.users.users[0].id);
                }else{
                    this.props.getUser(this.state.id);
                }
                this.setState({id: this.state.user.id, fname: this.state.user.fname, lname: this.state.user.lname, email: this.state.user.email, password: this.state.user.password, gender: this.state.user.gender, department: this.state.user.department, message: this.state.user.message});
                alert("by user"+this.state.user.id)
                alert("by state"+this.state.id)

            }    
        }

        if(nextProps.users.userFetched){
            this.setState({user:nextProps.users.user[0]})
        }
        
        if(nextProps.id.isIdSetted){
            this.setState({id: nextProps.id.id});
        }
        
    }
    submitHandler = event => {
        event.preventDefault();
        var flagDel = window.confirm("Confirm! Do You Want to Update this User with Id: "+this.state.index);
        if(flagDel){
            const toUpdate ={id: this.state.id, fname: this.state.fname, lname: this.state.lname, email: this.state.email, password: this.state.password, gender: this.state.gender, department: this.state.department,message: this.state.message};
            this.props.updateU(toUpdate);
        }
        
    }
    render() {
        if(this.state.users.length == 0){
            return(
                <NoUser panelHeading="User Unavailable" panelText="There is no User available to Update" />
            );
        }else if(this.state.users.length > 0){
            return (
                <>
                   <div className="container-fluid ">
                       <form onSubmit={e => this.submitHandler(e)}>
                            <div className="">
                                <div className="form-group">
                                    <label for="id">User ID</label>
                                    <select className="form-control" onChange={id => this.changeId(id)} defaultValue={this.state.id} name="id">
                                        <option value="" style={{color:"black"}} disabled>--Select User ID--</option>
                                        {
                                            this.state.users ? this.state.users.map((user,index) => {
                                                user.index = this.state.id;
                                                return <UserId {...user} key={user.id}/>
                                            }) : null
                                        
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6">
                                <InputwithLable forLabel="fnmae" defaultValue={this.state.user.fname}  label="First Name" type="text" name="fname" placeholder="Enter First name" onchange={this.changeHandler} />
                            </div>
                            <div className="col-sm-6">
                                <InputwithLable forLabel="lname" defaultValue={this.state.user.lname}  label="Last Name" type="text" name="lname" placeholder="Enter Last name" onchange={this.changeHandler} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <InputwithLable forLabel="email" defaultValue={this.state.user.email}  label="E-Mail Address" type="email" name="email" placeholder="Enter Email Address" onchange={this.changeHandler} />
                            </div>
                            <div className="col-sm-6">
                                <InputwithLable forLabel="password" defaultValue={this.state.user.password} label="Password" type="password" name="password" placeholder="Enter Your Password" onchange={this.changeHandler} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                           <GenderComponent  onchange={this.changeHandler} defaultValue={this.state.user.gender} />
                        </div>
                        <div className="col-sm-6">
                            <SelectwithLabel forLabel="department" defaultValue={this.state.user.department}  label="Department"  name="department" onchange={this.changeHandler} />
                        </div>
                           <div className="form-group">
                               {/* <label for="address">Address</label> */}
                               <textarea name="message"  defaultValue={this.state.user.message} placeholder="Enter Your Address Here..." style={{width:"100%"}} rows="10" onChange={e => this.changeHandler(e)}></textarea>
                           </div>
                           <input type="submit" value="Update Now" className="btn btn-block btn-primary" />
                       </form>
                   </div>
                </>
           );
        } 
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
        addU: (params) => dispatch(addUserAction(params)),
        delU: (params) => dispatch(removeUserAction(params)),
        setId: (params) => dispatch(setIdAction(params)),
        getUsers: () => dispatch(getUsersAction()),
        getUser: (params) => dispatch(getUserAction(params)),
        updateU: (params) => dispatch(updateUserAction(params))
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(UpdateUser);