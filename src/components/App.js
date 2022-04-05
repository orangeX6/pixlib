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

    console.log(response.config.params);
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

/*
# Axios vs Fetch
->>Fetch
>> With fetch we dont have to install any 3rd party packages
>> Fetch is a far more basic and lower level function to use to fetch data

->>Axios
>> a lot of code is already written for you in Axios


1. Create a file in the ./src/config.js
2. Create an configuration object to be exported.

const config = {
  access_key: 'abcdefg',
  secret_key: 'abcdefg'
};
export default config;
3. Import the module in your App.js file, and create variables to store your keys for use.

import config from '../config';
 
const accessKey = config.access_key;
const secretKey = config.secret_key;
4. Modify the axio request to access your key.

onSearchSubmit(term) {          
   axios.get(' https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {         
         Authorization: 'Client-ID ' + accessKey       
      }     
});
5. Then most important part, include your config.js into the .gitignore file.

# API Keys
config.js
6. If you type in git status , you wont see see the config.js file included in your git snapshots


#React Refs 
>>  Get access to a single DOM element
>>  We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props


*/
