import React from 'react';

// Components Imports
import Posts from "../../containers/Posts/Posts";

// Stylesheets Imports
import classes from './Home.module.css';
import NewPostButton from "../UI/NewPostButton/NewPostButton";

// Images Imports

const Home = (props) => {

    return (
        <div className={classes.Home}>
            <div className={classes.NewPostButton}>
                <NewPostButton />
            </div>
            <Posts />
        </div>
    );
};

export default Home;