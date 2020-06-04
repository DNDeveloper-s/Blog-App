import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';

// Components Imports
import ReactButton from "../../components/UI/ReactButton/ReactButton";
import PostOptions from "../../components/Home/PostOptions/PostOptions";
import CommentBox from "../Posts/Post/CommentBox/CommentBox";
import Loader from "../../components/UI/Loader/Loader";

// Utility Imports
import fetchSinglePost from '../../Utilities/fetchSinglePost';
import removeQueryFromUrl from "../../Utilities/removeQueryFromURL";

// Stylesheets Imports
import classes from './ViewFullPost.module.css';
import parseTime from "../../Utilities/parseTime";

// Images Imports

class ViewFullPost extends Component {
    state = {
        loading: false,
        post: null,
        liked: false
    };

    componentDidMount() {
        this.mounted = true;
        this.loadingPost();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    loadingPost = async () => {
        try {
            this.setState({loading: true});
            const url = new URLSearchParams(this.props.location.search);
            const id = url.get('id');
            const res = await fetchSinglePost(id);
            if(this.mounted) {
                this.setState({loading: false, post: res.data.post});
            }
        } catch (e) {
            console.log(e);
        }
    };

    goToComment = () => {
        let url = new URLSearchParams(this.props.location.search);
        let comment = url.get('comment');
        if(!comment) {
            return this.props.history.push(this.props.location.pathname + this.props.location.search + '&comment=true')
        }

        const filteredQuery = removeQueryFromUrl(this.props.location.search, 'comment');
        return this.props.history.push(this.props.location.pathname + filteredQuery);
    };

    toggleLikesHandler = () => {
        this.setState((prevState, props) => {
            return {liked: !prevState.liked};
        });
    };

    render() {

        let post = (
            <div>
                <Loader/>
            </div>
        );

        let url = new URLSearchParams(this.props.location.search);
        let comment = url.get('comment');
        let commentBox = null;
        if(comment && this.state.post) {
            commentBox = <CommentBox id={this.state.post._id} />;
        }

        if(this.state.post) {
            post = (
                <Fragment>
                    <div className={classes.PostTitle}>
                        {this.state.post.title}
                    </div>
                    <div className={classes.PostAuthor}>
                        Posted by: <span>{this.state.post.author}</span>
                    </div>
                    <div className={classes.PostDescription}>
                        {this.state.post.description}
                    </div>
                    <div className={classes.PostTimeStamp}>
                        Posted on {parseTime(this.state.post.timeStamp)}
                    </div>
                    <div className={classes.ReactButtons}>
                        <ReactButton onReact={this.toggleLikesHandler} reacted={this.state.liked ? 'Liked' : null} react="Like" />
                        <ReactButton onReact={this.goToComment} react="Comment" />
                    </div>
                    <PostOptions id={this.state.post._id} />
                </Fragment>
            )
        }

        return(
            <div className={classes.ViewFullPost}>
                {post}
                {commentBox}
                {/*{this.state.showCommentBox ? <CommentBox id={this.props.post._id} /> : null}*/}
            </div>
        )
    }
}

export default withRouter(ViewFullPost);