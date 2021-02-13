import React from 'react';
import { connect } from 'react-redux';
import { updateUserAction, setIdAction, getUsersAction,addUserAction,removeUserAction } from '../Actions';
import NoUser from '../Components/NoUser'
import InputwithLable from '../Components/AddUser Components/InputwithLabel';
import GenderComponent from '../Components/AddUser Components/GenderComponent';
import SelectwithLabel from '../Components/AddUser Components/SelectwithLabel';
import UserId from '../Components/UpdateUser Components/UserId';    


class RemoveUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {id: 0, users: []}
    }
    changeId = event => {
        this.setState({index : parseInt(event.target.value)});
    }
    changeHandler = event => {

        let nam = event.target.name;
        let val = event.target.value;
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
                this.setState({index: nextProps.users.users[this.state.id].id})
            }      
        }
        if(nextProps.id.isIdSetted){
            this.setState({id: nextProps.id.id},() => {
                console.log("id is....",this.state.id)
            });
        }
    }
    confirmHandler = id => {
        var flagDel = window.confirm("Confirm! Do You Want to Delete this User with id: "+id);
        if(flagDel){
            this.props.delU(parseInt(id));
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
                       <form  onSubmit={index => this.confirmHandler(this.state.index)}>
                            <div className="">
                                <div className="form-group">
                                    <label for="id">User ID</label>
                                    <select className="form-control" onChange={index => this.changeId(index)} defaultValue={this.state.id}>
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
                            <input type="submit" value="Remove This User" className="btn btn-block btn-danger" ></input>
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
        getUsers: () => dispatch(getUsersAction())
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(RemoveUser);