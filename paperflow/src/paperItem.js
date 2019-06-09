import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as api from './api/_base';
import './_variables.scss';
import './paperItem.scss';


class refList extends Component {

}

class PaperItem extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        paperId: PropTypes.number.isRequired
    }

    state = {};
    
    _openPaper(paperId) {
        const refPaperList = api.getRefs(paperId)
        this.state.openedPaper.refs = refPaperList
    }

    render() {
        return (
            <a href="#" onClick={() => this._openPaper(this.props.paperId)} className="paperItem">
            <div className="paperTitle">{this.props.title}</div>
                <div className="paperAuthor">
                    <ul className="authorList">
                        <li className="authorItem"></li>
                    </ul>
                </div>
                <div className="paperJournal">
                    <div className="journalItem"></div>
                </div>
            </a>
    )};
  }
  
  export default PaperItem;