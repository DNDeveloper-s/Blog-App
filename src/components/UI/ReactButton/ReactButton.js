import React from 'react';
import * as PropTypes from 'prop-types';

// Components Imports

// Stylesheets Imports
import classes from './ReactButton.module.css'

// Images Imports
import Like from '../../../assets/images/Like.svg';
import Comment from '../../../assets/images/Comment.svg';

const images = {Like, Comment};

const ReactButton = (props) => {

    return (
        <div onClick={props.onReact} className={[classes.ReactButton, classes[props.react], props.reacted ? classes[props.reacted] : null].join(' ')}>
            <img src={images[props.react]} alt=""/>
            <p>{props.reacted || props.react}</p>
        </div>
    );
};

ReactButton.propTypes = {
    react: PropTypes.oneOf(['Comment', 'Like']).isRequired,
    onReact: PropTypes.func,
    reacted: PropTypes.string
};

export default ReactButton;