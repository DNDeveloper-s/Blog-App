import React from 'react';
import * as PropTypes from 'prop-types';
import Radium from "radium";

// Components Imports

// Stylesheets Imports
import classes from './Button.module.css';

// Images Imports

const colors = {
    blue: {
        color: '#3498db',
        active: '#3498dbde'
    },
    green: {
        color: '#2ecc71',
        active: '#27ae60'
    },
    red: {
        color: '#e74c3c',
        active: '#c0392b'
    },
    skyBlue: {
        color: '#1abc9c',
        active: '#16a085'
    },
    grey: {
        color: '#95a5a6',
        active: '#7f8c8d'
    },
    orange: {
        color: '#e67e22',
        active: '#d35400'
    },
    darkBlue: {
        color: '#34495e',
        active: '#2c3e50'
    },
    yellow: {
        color: '#f1c40f',
        active: '#f39c12'
    }
};

const Button = (props) => {
    let styles = {
        background: props.color && colors[props.color] ? colors[props.color].color : '#3498db',
        ':hover': {
            background: props.color && colors[props.color] ? colors[props.color].active : '#2980b9'
        }
    };

    return (
        <button style={styles} className={classes.Button} onClick={props.clicked}>{props.children}</button>
    );
};

Button.propTypes = {
    clicked: PropTypes.func,
    color: PropTypes.oneOf(['green', 'blue', 'orange', 'skyBlue', 'darkBlue', 'grey', 'red', 'yellow'])
};

export default Radium(Button);