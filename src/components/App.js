import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2vh" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} Images
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
*/
