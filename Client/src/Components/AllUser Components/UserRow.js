import React from 'react';
import { Link } from 'react-router-dom';

class UserRow extends React.Component{
    constructor(props){
        super(props);
        this.state= {}
    }
    render() {
        const {id,fname, lname, email, password, gender, department, message,confirmHandler,setId} = this.props;
        return (
             <>
                <tr style={{borderTop:"2px solid lightgray",padding:"5px 10px"}} index={this.props.index}>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{gender}</td>
                    <td>{department}</td>
                    <td>{message}</td>
                    <td><button className="btn btn-primary"><Link to="/UpdateUser" onClick={index => setId(id)} style={{color:"white"}}>Update</Link></button></td>
                    <td><button className="btn btn-danger" onClick={index => confirmHandler(id)}>Delete</button></td>
                </tr>
             </>
        );
    }
}

export default UserRow;