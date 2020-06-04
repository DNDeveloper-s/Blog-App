import React from 'react';

// Components Imports
import NavigationItem from "./NavigationItem/NavigationItem";

// Stylesheets Imports
import classes from './NavigationItems.module.css';

// Images Imports

const NavigationItems = (props) => {

    return (
        <nav className={classes.NavigationItems}>
            <NavigationItem path={'/home'}>Home</NavigationItem>
            <NavigationItem path={'/posts'}>Posts</NavigationItem>
        </nav>
    );
};

export default NavigationItems;