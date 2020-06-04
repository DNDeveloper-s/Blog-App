import React from 'react';

// Components Imports

// Stylesheets Imports
import classes from './Logo.module.css';

// Images Imports
import LogoImage from '../../../assets/images/Logo.svg';

const Logo = (props) => {

    return (
        <div className={classes.Logo}>
            <img src={LogoImage} alt=""/>
        </div>
    );
};

export default Logo;