import React from 'react';
import { Link } from "react-router-dom";
import * as PropTypes from 'prop-types';

// Components Imports

// Stylesheets Imports
import classes from './DropDownItem.module.css';

// Images Imports

const DropDownItem = (props) => {

    return (
        <div className={classes.DropDownItem}>
            <Link to={props.path}>{props.children}</Link>
        </div>
    );
};

DropDownItem.propTypes = {
    path: PropTypes.object
};

export default DropDownItem;