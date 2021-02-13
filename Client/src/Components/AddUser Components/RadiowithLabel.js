import React from 'react';

class RadiowithLabel extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const {name, value, isChecked , onchange} = this.props;
        return (
             <>
                <div class="radio-inline">
                    <label><input type="radio" name={name} value={value} checked={isChecked} onChange={e => onchange(e)} />{value}</label>
                    <div>{isChecked}</div>
                </div>
             </>
        );
    }
}

export default RadiowithLabel;