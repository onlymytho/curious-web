import React, { Component } from 'react';
import fetch from "node-fetch";
import PaperItem from './paperItem';
import TopBar from './topBar';
import './App.scss';

const API_URL = 'https://api.scinapse.io/search?'

const searchPapers = (query, size=10) => {
  if (query) { 
    const params = {
      query: 'q=' + query,
      else: '&sort=RELEVANCE&filter=year%3D:,fos%3D,journal%3D&page=0',
      size: '&size=' + size
    };
    const REQUEST_URL = API_URL + params.query + params.else + params.size;
    
    return fetch(`${REQUEST_URL}`)
      .then(res => res.json())
      .then(json => json.data.content);
  } else {
    alert("Insert query!")
  }
}



class App extends Component {
  state = {
    isQueried: false
  };

  _handleSearchResult = (paperList) => {
    this.setState({papers: paperList});
    this.setState({isQueried: true})
  }

  _renderPapers = () => {
    console.log(this.state.papers.data.content)

    const paperList = Object.keys(this.state.papers).map((paper, index) => {
      return <PaperItem title={paper.title} paperId={paper.id} key={index} />
    })
    console.log(paperList)
    return paperList
  };

  _openRefs = () => {
    console.log('hi openRefs')
  };

  componentWillMount() {
    // const query = 'solar+battery+aerosol'
    // if (!this.state.isQueried) {
    //   const query = 'side effect'
    //   searchPapers(query, 30).then(data => {
    //     this.setState({papers: data})
    //   })
    // }
  };

  render () {
    return (
      <div className="App">
        <TopBar queryResult={this._handleSearchResult}/>
        <ul className="paperList searchResult">
          {this.state.papers ? this._renderPapers() : ("Loading")}
        </ul>
        <ul className="paperList refList"></ul>
      </div>
    )
  };
}

export default App;
