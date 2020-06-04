import React from 'react';

// Components Imports
import DropDownItems from "./DropDownItems/DropDownItems";

// Stylesheets Imports
import classes from './DropDown.module.css';

// Images Imports

const DropDown = (props) => {

    return (
        <div className={[classes.DropDown]}>
            <DropDownItems items={props.items}/>
        </div>
    );
};

export default DropDown;