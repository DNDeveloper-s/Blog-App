import React from 'react';
import { withRouter } from 'react-router-dom';

// Components Imports
import Button from "../Button/Button";

// Images Imports

const NewPostButton = (props) => {

    function goToNewPost() {
        props.history.push('/createPost');
    }

    return (
        <Button color="orange" clicked={goToNewPost}>Create new post</Button>
    );
};

export default withRouter(NewPostButton);