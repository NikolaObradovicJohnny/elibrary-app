import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      search: props.searchInput
      };
    }

  updateSearch(event) {
    this.setState({search: event.target.value});
    // this.props.searchInput = this.state.search.value;
  }

  onChangeSearchInput(event) {
    this.setState({search: event.target.value});
    this.props.searchInput = this.state.search;
    alert(this.state.search);
    alert(this.props.searchInput);
  }

  render() {
    var imgStyle = {
      width: '180px',
      height: '100px',
    };
    var divStyle = {
      position: 'absolute',
      width: 'calc(100% - 350px)',
    };
    var inputStyle = {
      backgroundColor: '#FFCC80', 
      color: '#E65100'
    };
    var iStyle = {
      color: '#E65100',
    };
    return (
      <div>
        <span className="logo-btn">
          <a href="index.html">
            <img src="images/logo.png" style={imgStyle} />
          </a>
        </span>
        <span>
          <form role="search">
            <div className="form-group has-feedback searchBtn" style={divStyle}>
              <input 
                id="searchInput" 
                name="searchInput" 
                defaultValue={this.state.search} 
                type="text" className="form-control" 
                placeholder="Pretraga..." 
                style={inputStyle}
                onChange={this.onChangeSearchInput.bind(this)} 
              />
              <i className="glyphicon glyphicon-search form-control-feedback" style={iStyle}></i>
            </div>
          </form>
        </span>
      </div>
    );
  }
}

export default SearchBar;