import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './config/youtube_api_key';
import SearchBar from './components/search_bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    this.doSearch('surfboards');
  }

  doSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos });
      console.log(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
