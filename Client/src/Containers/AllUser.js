import React from 'react';
import { connect } from 'react-redux';
import {addUserAction, removeUserAction,setIdAction,getUsersAction} from '../Actions/index';
import UserRow from '../Components/AllUser Components/UserRow';
import NoUser from '../Components/NoUser';
import axios from 'axios';

const ths = ["First Name",
    "Last Name",
    "Email",
    "Password",
    "Gender",
    "Department",
    "Message",
    "Update",
    "Delete",]; 

class AllUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            student_data:[],
            deleted:false
        }
    }
    confirmHandler = id => {
        var flagDel = window.confirm("Confirm! Do You Want to Delete this User with id: "+id);
        if(flagDel){
            this.props.delU(parseInt(id));
        }
    }

    componentWillMount(){
        this.props.getUsers();
    }
    componentWillReceiveProps(props){
        if(props.userDeleted){
            this.props.getUsers();
        }
    }
    render() {
        if(this.props.users){
            return (
                <>
                   <div className="table-responsive">
                   <table  className="table table-striped">
                       <tr style={{borderTop:"2px solid lightgray",padding:"5px 10px"}}>
                          {
                              ths ? ths.map((thValue,index) => {
                                  return <th index ={index}>{thValue}</th>
                              }) :null
                          }
                       </tr>
                       {
                           
                           this.props.users ? this.props.users.map((user,index) => {
                               user.confirmHandler = this.confirmHandler;
                               user.setId = this.props.setId;
                               return <UserRow {...user} index={user.id}  />
                           }) : null
                       }
   
                       
                   </table>
                   </div>
                  
                </>
           );
        }else{
            return(
                <NoUser panelHeading="No User" panelText="There is no User in Record" />
            );
        }
        
    }
}


function mapStateToProps(state) {
    console.log("user delted============>",state.userReducer.userRemoved)
    return{
        userDeleted: state.userReducer.userRemoved,
        users : state.userReducer.users,
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

export default connect(mapStateToProps,matchDispatchToProps)(AllUser);