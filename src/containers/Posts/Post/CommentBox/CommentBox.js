import React, {Component, createRef, Fragment} from 'react';
import axios from '../../../../axios-blog';

// Components Imports
import Comment from "../../../../components/Home/Comment/Comment";
import Loader from "../../../../components/UI/Loader/Loader";
import Button from "../../../../components/UI/Button/Button";

// Stylesheets Imports
import classes from './CommentBox.module.css';

// Images Imports

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();
        this.commentScrollRef = createRef();
    }

    state = {
        loading: false,
        comments: null,
        posting: false
    };

    async componentDidMount() {
        this.mounted = true;
        this.inputRef.current.focus();
        this.setState({loading: true});
        const res = await this.fetchComments();
        if(this.mounted) {
            this.setState({loading: false, comments: res.data.comments});
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    fetchComments = () => {
        return axios.get('/fetchComments?postId=' + this.props.id);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.commentScrollRef.current.scrollTo(0, this.commentScrollRef.current.scrollHeight);
        if(prevState.posting !== this.state.posting) {
            this.inputRef.current.value = '';
        }
    }

    postComment = async (content, user) => {
        if(!content.length > 0) return null;
        try {
            this.setState({posting: true});
            const data = {
                content,
                user,
                postId: this.props.id,
                timeStamp: Date.now()
            };
            const res = await axios.post('/postComment', data);
            if(this.mounted) {
                const comments = [...this.state.comments];
                comments.push(res.data.commentObj);
                this.setState({posting: false, comments: comments});
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    keyDownInputHandler = e => {
        if(e.key === 'Enter') {
            this.postComment(this.inputRef.current.value, 'Saurabh Singh');
        }
    };

    postButtonHandler = e => {
        this.postComment(this.inputRef.current.value, 'Saurabh Singh');
    };

    render() {

        let comments = null;

        if(this.state.loading) {
            comments = (
                <div style={{margin: '20px auto'}}>
                    <Loader />
                </div>
            )
        }

        if(this.state.comments) {
            comments = this.state.comments.map((comment, ind) => {
                return (<Comment
                    key={ind}
                    comment={comment}
                />)
            });

            if(comments.length === 0) {
                comments = <p style={{color: 'darkgrey'}}>No Comments on this post yet.</p>
            }
        }

        if(this.state.posting) {
            comments = (
                <Fragment>
                    {comments && comments.length > 0 ? comments : null}
                    <div style={{margin: '40px auto 0'}}>
                        <Loader />
                    </div>
                </Fragment>
            );
        }

        return(
            <div className={classes.CommentBox}>
                <div className={classes.PostActions}>
                    <input
                        type="text"
                        onKeyDown={this.keyDownInputHandler}
                        placeholder="Insert Comment..."
                        ref={this.inputRef}
                    />
                    <Button clicked={this.postButtonHandler}>Post</Button>
                </div>
                <div className={classes.Comments} ref={this.commentScrollRef}>
                    {comments}
                </div>
            </div>
        )
    }
}

export default CommentBox;