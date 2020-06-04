import React, { Component } from 'react';
import axios from '../../axios-blog';

// Components Imports
import Post from "./Post/Post";
import Loader from "../../components/UI/Loader/Loader";

// Stylesheets Imports
import classes from './Posts.module.css';

// Images Imports

class Posts extends Component {
    constructor(props) {
        super(props);
        this.mounted = false;
    }

    state = {
        loading: false,
        posts: null,
        error: null
    };

    componentDidMount() {
        this.mounted = true;
        this.loadPosts();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.posts);
    }

    loadPosts = async () => {
        try {
            this.setState({loading: true, error: null});
            const res = await this.fetchPosts();
            if(this.mounted) {
                this.setState({loading: false, posts: res.data.posts});
            }
        } catch (e) {
            console.log(e);
            this.setState({loading: false, error: e});
        }
    };

    fetchPosts() {
        return axios.get('/fetchAllPosts');
    }

    render() {
        let posts = null;
        if(this.state.loading) {
            posts = (
                <div style={{margin: '100px auto'}}>
                    <Loader />
                </div>
            )
        }
        if(this.state.posts) {
            posts = this.state.posts.map((post, ind) => {
                return (
                    <Post
                        key={ind}
                        post={post}
                    />
                )
            })
        }

        return(
            <div className={classes.Posts}>
                {posts}
            </div>
        )
    }
}

export default Posts;