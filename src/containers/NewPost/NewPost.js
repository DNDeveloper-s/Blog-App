import React from 'react';

// Components Imports
import Button from "../../components/UI/Button/Button";

// Stylesheets Imports
import classes from './NewPost.module.css';

// Images Imports

const NewPost = (props) => {

    return (
        <div className={classes.NewPost}>
            <div className={classes.inputControl}>
                <label htmlFor="">Post Title</label>
                <input type="text" placeholder="Enter post title..."/>
            </div>
            <div className={classes.inputControl}>
                <label htmlFor="">Post Description</label>
                <textarea placeholder="Enter post description..." id="" cols="30" rows="10" />
            </div>
            <div className={classes.inputControl}>
                <label htmlFor="">Post Author</label>
                <input type="text" placeholder="Enter post author..."/>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start'
            }}>
                <Button color='darkBlue'>Create Post</Button>
            </div>
        </div>
    );
};

export default NewPost;