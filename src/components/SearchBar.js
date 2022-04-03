import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' };

  //? USED BY Sol 2 n 3  - onSubmit={this.onFormSubmit.bind(this)} and event => this.onFormSubmit(event)
  // onFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(this);
  // }

  onFormSubmit = (e) => {
    // console.log(process.env.REACT_APP_MY_API_KEY);
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* Solution 1 & 2 */}
        <form className="ui form" onSubmit={this.onFormSubmit /*.bind(this)*/}>
          {/* Solution 3 */}
          {/* <form className="ui form" onSubmit={e=> this.onFormSubmit(e)}> */}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
