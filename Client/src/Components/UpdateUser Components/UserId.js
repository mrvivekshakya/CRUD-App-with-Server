import React from 'react';

class UserId extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        const {id,fname, lname, email, password, gender, department, message,index} = this.props;
        //const {optionValue} = this.props;
        return (
             <>
                <option value={id} style={{color:"black"}}>{id}. {fname} {lname} - {email}</option>
             </>
        );
    }
}
export default UserId;