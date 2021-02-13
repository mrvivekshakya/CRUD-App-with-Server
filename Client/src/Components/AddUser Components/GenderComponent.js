import React from 'react';
import RadiowithLabel from './RadiowithLabel';

const genderData = [
    {
        value: "Male",
        
    },
    {
        value: "Female",
       
    },
    {
        value: "Other",
       
    }
]
class GenderComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
             <>
                <div className="form-group">
                    <label for="gender" style={{display:"block",marginLeft:"-15px"}}>Gender</label>
                    {
                        genderData ? genderData.map((gender,index) => {
                            gender.name = "gender";
                            if(gender.value === this.props.defaultGender){
                                gender.isChecked = true;
                            }
                            gender.onchange = this.props.onchange;
                            return <RadiowithLabel {...gender} />
                        }) : null
                    }
                </div>
             </>
        );
    }
}

export default GenderComponent;