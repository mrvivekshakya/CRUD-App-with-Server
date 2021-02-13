import React from 'react';
import Option from './Option';
 
const optionsData = [
    {
        option: "--Select Your Department--",
        value: ""
    },
    {
        option: "Informataion Technoloyg",
        value: "Informataion Technoloyg"
    },
    {
        option: "Education",
        value: "Education"
    },
    {
        option: "Law Department",
        value: "Law Department"
    },
    {
        option: "Management",
        value: "Management"
    }
]

class SelectwithLabel extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const {forLabel,label,className,name,defaultValue,onchange} = this.props;
        return (
             <>
                <div className="form-group">
                    <label for={forLabel}>{label}</label>
                    <select className={className} name={name} className="form-control" defaultValue={defaultValue} onChange={index => onchange(index)}>
                        {
                            optionsData ? optionsData.map((option,index) => {
                                return <Option {...option} index={index} />
                            }) : null 
                        }
                    </select>
                </div>
             </>
        );
    }
}

export default SelectwithLabel;