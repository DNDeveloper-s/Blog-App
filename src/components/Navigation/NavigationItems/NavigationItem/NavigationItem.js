import React from 'react';
import * as PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

// Components Imports

// Stylesheets Imports
import classes from './NavigationItem.module.css';

// Images Imports

const NavigationItem = (props) => {
    
    return (
        <div className={classes.NavigationItem}>
            <li>
                <NavLink to={props.path} activeClassName={classes.active}>{props.children}</NavLink>
            </li>
        </div>
    );
};

NavigationItem.propTypes = {
    path: PropTypes.string
};

export default NavigationItem;