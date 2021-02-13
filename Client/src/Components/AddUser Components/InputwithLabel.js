import React from 'react';

class InputwithLabel extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        const {forLabel,label, type,name,defaultValue,placeholder,onchange} = this.props;
        return (
             <>
                <div className="form-group">
                    <label for={forLabel}>{label}</label>
                    <input type={type} name={name} defaultValue={defaultValue} placeholder={placeholder} className="form-control" onChange={e => onchange(e)} />
                </div>
             </>
        );
    }
}

export default InputwithLabel;