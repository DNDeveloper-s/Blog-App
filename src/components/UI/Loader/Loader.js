import React from 'react';

// Components Imports

// Stylesheets Imports
import classes from './Loader.module.css';

// Images Imports

const Loader = () => (
    <div className={classes.Loader}>
        <div className={classes.bounce1} />
        <div className={classes.bounce2} />
        <div />
    </div>
);

export default Loader;