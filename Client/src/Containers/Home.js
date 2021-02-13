import React from 'react';
import { connect } from 'react-redux';
import {addUserAction,removeUserAction} from '../Actions/index';
import  UserId from '../Components/UpdateUser Components/UserId'
import NoUser from'../Components/NoUser';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        if(this.props.users.length==0){
            return(
                <NoUser panelHeading="No User" panelText="There is no User in Record" />
            );
        }else{
            return (
                <>
                   <div className="container-fluid ">
                        <div class="panel panel-default">
                            <div class="panel-heading text-center panel-danger"><b>Nuber of Users: {this.props.users.length}</b></div>
                            <div class="panel-body text-center ">You can User aur Panel according to left Menu.</div>
                        </div>
                       <form >
                            <div className="">
                                <div className="form-group">
                                    <label for="id">User ID</label>
                                    <select className="form-control" >
                                        <option value="" style={{color:"black"}}>--Select User ID--</option>
                                        {
                                            this.props.users ? this.props.users.map((user,index) => {
                                                user.index = index;
                                                return <UserId {...user} />
                                            }) : null
                                        }
                                    </select>
                                </div>
                            </div>
                       </form>
                   </div>
                </>
           );
        }
        
    }
}

function mapStateToProps(state) {
    console.log("home",state.userReducer.users)
    return{
        users : state.userReducer.users,
    }
}

function matchDispatchToProps(dispatch){
    return {
        addU: (data) => dispatch(addUserAction(data)),
        delU: (index) => dispatch(removeUserAction(index))
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(Home);