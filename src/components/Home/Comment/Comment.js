import React from 'react';
import * as PropTypes from 'prop-types';

// Components Imports


// Utilities Imports
import parseTime from '../../../Utilities/parseTime';


// Stylesheets Imports
import classes from './Comment.module.css';

// Images Imports

const Comment = (props) => {

    return (
        <div className={classes.Comment}>
            <div className={classes.user}>
                {props.comment.user}
            </div>
            <div className={classes.message}>
                {props.comment.content}
            </div>
            <div className={classes.timeStamp}>
                {parseTime(props.comment.timeStamp)}
            </div>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        content: PropTypes.string,
        timeStamp: PropTypes.number
    })
};

export default Comment;