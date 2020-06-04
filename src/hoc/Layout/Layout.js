import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router-dom';

// Components Imports
import Home from "../../components/Home/Home";
import Navigation from "../../components/Navigation/Navigation";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../containers/NewPost/NewPost";

// Stylesheets Imports
// import classes from './Layout.module.css';

// Images Imports

const Layout = (props) => {

    return (
        <Fragment>
            <Navigation />
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/post' component={FullPost}/>
                <Route path='/createPost' component={NewPost} />
            </Switch>
        </Fragment>
    );
};

export default Layout;