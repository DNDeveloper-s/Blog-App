import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

// Components Imports
import ReactButton from "../../../components/UI/ReactButton/ReactButton";
import PostOptions from "../../../components/Home/PostOptions/PostOptions";
import CommentBox from "./CommentBox/CommentBox";

// Utility Imports
import parseTime from '../../../Utilities/parseTime';

// Stylesheets Imports
import classes from './Post.module.css';

// Images Imports

class Post extends Component {
    state = {
        liked: false,
        showCommentBox: false
    };

    toggleLikesHandler = () => {
        this.setState((prevState, props) => {
            return {liked: !prevState.liked};
        });
    };

    toggleCommentBoxHandler = () => {
        this.setState((prevState, props) => {
            return {showCommentBox: !prevState.showCommentBox};
        });
    };

    render() {

        return(
            <div className={classes.Post}>
                <div className={classes.PostTitle}>
                    {this.props.post.title}
                </div>
                <div className={classes.PostAuthor}>
                    Posted by: <span>{this.props.post.author}</span>
                </div>
                <div className={classes.PostDescription}>
                    {this.props.post.description}
                </div>
                <div className={classes.PostTimeStamp}>
                    Posted on {parseTime(this.props.post.timeStamp)}
                </div>
                <div className={classes.ReactButtons}>
                    <ReactButton onReact={this.toggleLikesHandler} reacted={this.state.liked ? 'Liked' : null} react="Like" />
                    <ReactButton onReact={this.toggleCommentBoxHandler} react="Comment" />
                </div>
                <PostOptions id={this.props.post._id} />
                {this.state.showCommentBox ? <CommentBox id={this.props.post._id} /> : null}
            </div>
        )
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        timeStamp: PropTypes.number,
        _id: PropTypes.string
    })
};

export default Post;