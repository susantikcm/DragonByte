import React from 'react';

import './checkbox.style.scss';

const CustomCheckBox = ({ label, ...otherProps }) => (
    <div className="group">
        <input className='custom-checkbox' {...otherProps} />
        {            
            label ?  
            (
                <label>{label}</label>
            )
            : null
        }
    </div>
)

export default CustomCheckBox;