import React from 'react';
import { Link } from 'react-router-dom';
import LeftMenuItem from './LeftMenuItem';

class LeftMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <>
                <ul className="list-group">
                   {
                       this.props.urls ? this.props.urls.map((item,index) => {
                           return <LeftMenuItem url={item.url} value={item.value} />
                       }) : null
                   }
                </ul>
             </>
        );
    }
}

export default LeftMenu;