import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [], currentPage: 1 };
  currentPage = 1;
  term;

  onSearchSubmit = async (term, page = 1) => {
    this.term = term;
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term, page: page, per_page: 16 },
    });

    // console.log(response.config.params);
    this.setState({ images: response.data.results, currentPage: page });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '2vh' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList
          images={this.state.images}
          onSearchSubmit={this.onSearchSubmit}
          page={this.state.currentPage}
          term={this.term}
        />
      </div>
    );
  }
}

export default App;
