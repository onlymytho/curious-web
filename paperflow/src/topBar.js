import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from './searchBar';
import './_variables.scss';
import './topBar.scss';

class TopBar extends Component {
    handleLoadedQueryResult = (queryResult) => {
        this.props.queryResult(queryResult);
    }

    render() {
        return (
            <header className="topBar">
                <SearchBar queryResult={this.handleLoadedQueryResult}/>
            </header>
        )
    }
}

export default TopBar