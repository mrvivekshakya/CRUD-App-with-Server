import React from 'react';

class NoUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
             <>
                 <div class="panel panel-default">
                    <div class="panel-heading text-center panel-danger"><b>{this.props.panelHeading}</b></div>
                    <div class="panel-body text-center ">{this.props.panelText}</div>
                </div>
             </>
        );
    }
}

export default NoUser;