import React from 'react';
import { Link } from 'react-router-dom';

class LeftMenuItem extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <>
                 <li className="list-group-item text-center text-bold list-group-item-success"><Link to={this.props.url}>{this.props.value}</Link></li>
             </>
        );
    }
}
export default LeftMenuItem;