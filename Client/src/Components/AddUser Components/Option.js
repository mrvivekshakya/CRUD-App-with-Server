import React from 'react';

class Option extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const {option,value} = this.props;
        return (
             <>
                 <option value={value}>{option}</option>
             </>
        );
    }
}

export default Option;