import React from 'react';

// Components Imports
import ViewFullPost from "../../containers/ViewFullPost/ViewFullPost";

// Stylesheets Imports
import classes from './FullPost.module.css';

// Images Imports

const FullPost = (props) => {

    return (
        <div className={classes.FullPost}>
            <ViewFullPost />
        </div>
    );
};


export default FullPost;