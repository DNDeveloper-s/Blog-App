import React from 'react';

// Components Imports
import DropDownItem from "./DropDownItem/DropDownItem";

// Stylesheets Imports
import classes from './DropDownItems.module.css';

// Images Imports

const DropDownItems = (props) => {
    let items = props.items.map((item, ind) => {
        return (
            <DropDownItem key={ind} path={item.path}>{item.value}</DropDownItem>
        )
    });

    return (
        <div className={classes.DropDownItems}>
            {items}
        </div>
    );
};

export default DropDownItems;