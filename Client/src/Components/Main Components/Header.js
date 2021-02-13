import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <>
                 <h1 className="jumbotron">{this.props.title}
                 <p>{this.props.caption}</p></h1>
             </>
        );
    }
}

export default Header;