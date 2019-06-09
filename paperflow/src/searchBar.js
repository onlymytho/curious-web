import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as api from './api/_base';
import './_variables.scss';
import './searchBar.scss';


class SearchBar extends Component {
    state = {inputValue: ""}
    static propTypes = {
        query: PropTypes.string
    }
    
    _startSearch = (queryValue) => {
        const queryResult = api.Search(queryValue);
        this.props.queryResult(queryResult);
    }

    _updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
         });
        if (this.state.inputValue.length > 1) {
            this._startSearch(this.state.inputValue);
        }
      }
    render () {
        
        return (
            <input 
                className="searchInput" 
                value={this.state.inputValue}
                onChange={(event) => this._updateInputValue(event)}
                type="text"/>
        )
    }
}

export default SearchBar