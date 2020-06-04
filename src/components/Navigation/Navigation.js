import React from 'react';

// Components Imports
import NavigationItems from "./NavigationItems/NavigationItems";
import Logo from "./Logo/Logo";

// Stylesheets Imports
import classes from './Navigation.module.css';

// Images Imports

const Navigation = (props) => {
    
    return (
        <div className={classes.Navigation}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <NavigationItems />
        </div>
    );
};
export default Navigation;