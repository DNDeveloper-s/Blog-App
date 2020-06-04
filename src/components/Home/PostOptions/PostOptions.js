import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import * as PropTypes from 'prop-types';

// Components Imports
import DropDown from "../../UI/DropDown/DropDown";

// Stylesheets Imports
import classes from './PostOptions.module.css';

// Images Imports
import OptionsImage from '../../../assets/images/Options.svg';

class PostOptions extends Component {
    constructor(props) {
        super(props);
        this.optionsRef = React.createRef();
    }

    state = {
        showOptions: false,
    };

    toggleOptionsHandler = () => {
        this.setState((prevState, props) => {
            return {showOptions: !prevState.showOptions};
        });
    };

    componentDidMount = () => {
        document.addEventListener('mousedown', this.outsideClickHandler);
    };

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.outsideClickHandler);
    }


    outsideClickHandler = (e) => {
        if(!e.path.includes(this.optionsRef.current)) {
            this.setState({showOptions: false})
        }
    };

    render() {
        const items = [
            {
                value: 'View Full Post',
                path: {
                    pathname: '/post',
                    search: '?id=' + this.props.id
                }
            },
            {
                value: 'Delete',
                path: {
                    pathname: this.props.match.url + '/deletePost',
                    search: '?id=' + this.props.id
                }
            },
            {
                value: 'Share',
                path: {
                    pathname: '/sharePost',
                    search: '?id=' + this.props.id
                }
            },
            {
                value: 'Comment',
                path: {
                    pathname: '/post',
                    search: '?id=' + this.props.id + '&comment=true'
                }
            },
        ];

        return (
            <div className={classes.PostOptions} ref={this.optionsRef}>
                <div className={classes.ToggleOptions} onClick={this.toggleOptionsHandler}>
                    <img src={OptionsImage} alt=""/>
                </div>
                {this.state.showOptions ?
                    <DropDown items={items}/> :
                    null
                }
            </div>
        );
    }
}

PostOptions.propTypes = {
    onToggle: PropTypes.func,
    show: PropTypes.bool
};

export default withRouter(PostOptions);