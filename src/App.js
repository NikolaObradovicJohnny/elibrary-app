import React, { Component } from 'react';
// import BookItemList from './Components/BookItemList';
import BookList from './Components/BookList';
// import SearchBar from './Components/SearchBar';
import FilterBar from './Components/FilterBar';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		searchInput: '',
  		genreFilter: [],
  		writerFilter: [],
  		books: [],
  	};
  }
  componentWillMount() {
  	fetch('/books-store/books/_search?size=12',
      { mode:'no-cors' })
        .then((response) => response.json())
        .then((responseJson) => {
          // alert(JSON.stringify(responseJson.hits.hits));
          this.setState({
            isLoading: false,
            dataSource: responseJson,
            title: responseJson.took,
            books: responseJson.hits.hits
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
  }
  onChangeSearchInput(event) {
  	this.setState({searchInput: event.target.value});
  	// var filteriGenre = '';
  	// var filteriWriter = '';
  	// if (this.state.genreFilter.length !== 0) {
  	// 	filteriGenre = '"filter": {  "terms": { "genre.name": ' + this.state.genreFilter + '  } }'; 
  	// }
  	// if (this.state.writerFilter.length !== 0) {
  	// 	filteriWriter = '"filter": {  "terms": { "writer": ' + this.state.writerFilter + '  } }'; 
  	// }

  	// alert("Genre Filter - APP.js: " + JSON.stringify(this.state.genreFilter));
  	// alert("Writer Filter - APP.js: " + JSON.stringify(this.state.writerFilter));

  	// sve iz pocetka zajedno sa filterima ....
  	if (event.target.value.length > 3 && this.state.genreFilter.length > 0 && this.state.writerFilter.length > 0) {
  		fetch('/books-store/books/_search?size=12',
	    {
	      mode:'no-cors',
	      method:'POST',
	      body: 
	      window.JSON.stringify({
			  "query": {
			    "bool": {
			      "must": {
			        "multi_match": {
			        "fields":  [ "title", "description" ],
			        "query":     this.state.searchInput,
			        "fuzziness": "AUTO"
			      }
			      },
			      "filter": {
			        "terms": {
			          "genre.name": this.state.genreFilter
			        }
			      },
			      "filter": {
			        "terms": {
			          "writer.keyword": this.state.writerFilter
			        }
			      }
			    }
			  }
			})
	    })
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // alert(JSON.stringify(responseJson.hits.hits));
	        this.setState({
	          books: responseJson.hits.hits
	        }, function() {
	          // do something with new state
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	} else if (event.target.value.length > 3 && this.state.genreFilter.length === 0 && this.state.writerFilter.length === 0) {
  		fetch('/books-store/books/_search?size=12',
	    {
	      mode:'no-cors',
	      method:'POST',
	      body: 
	      window.JSON.stringify({
	        "query": {
	            "multi_match" : {
	            	"query" : this.state.searchInput,
	                "fuzziness":"AUTO",
	                "fields": ["title","description","writer"]
	                }
	            }
	        })
	    })
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // alert(JSON.stringify(responseJson.hits.hits));
	        this.setState({
	          books: responseJson.hits.hits
	        }, function() {
	          // do something with new state
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	} else if (event.target.value.length > 3 && this.state.genreFilter.length === 0 && this.state.writerFilter.length > 0) {
  		fetch('/books-store/books/_search?size=12',
	    {
	      mode:'no-cors',
	      method:'POST',
	      body: 
	      window.JSON.stringify({
			  "query": {
			    "bool": {
			      "must": {
			        "multi_match": {
			        "fields":  [ "title", "description" ],
			        "query":     this.state.searchInput,
			        "fuzziness": "AUTO"
			      }
			      },
			      "filter": {
			        "terms": {
			          "writer.keyword": this.state.writerFilter
			        }
			      }
			    }
			  }
			})
	    })
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // alert(JSON.stringify(responseJson.hits.hits));
	        this.setState({
	          books: responseJson.hits.hits
	        }, function() {
	          // do something with new state
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	} else if (event.target.value.length > 3 && this.state.genreFilter.length > 0 && this.state.writerFilter.length === 0) {
  		fetch('/books-store/books/_search?size=12',
	    {
	      mode:'no-cors',
	      method:'POST',
	      body: 
	      window.JSON.stringify({
			  "query": {
			    "bool": {
			      "must": {
			        "multi_match": {
			        "fields":  [ "title", "description" ],
			        "query":     this.state.searchInput,
			        "fuzziness": "AUTO"
			      }
			      },
			      "filter": {
			        "terms": {
			          "genre.name": this.state.genreFilter
			        }
			      }
			    }
			  }
			})
	    })
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // alert(JSON.stringify(responseJson.hits.hits));
	        this.setState({
	          books: responseJson.hits.hits
	        }, function() {
	          // do something with new state
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	} else if (event.target.value.length < 3 && this.state.genreFilter.length > 0 && this.state.writerFilter.length > 0) {
  		fetch('/books-store/books/_search?size=12',
	    {
	      mode:'no-cors',
	      method:'POST',
	      body: 
	      window.JSON.stringify({
			  "query": {
			    "bool": {
			      "filter": {
			        "terms": {
			          "genre.name": this.state.genreFilter
			        }
			      },
			      "filter": {
			        "terms": {
			          "writer.keyword": this.state.writerFilter
			        }
			      }
			    }
			  }
			})
	    })
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // alert(JSON.stringify(responseJson.hits.hits));
	        this.setState({
	          books: responseJson.hits.hits
	        }, function() {
	          // do something with new state
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	} else if (event.target.value.length < 3 && this.state.genreFilter.length === 0 && this.state.writerFilter.length === 0) {
  		fetch('/books-store/books/_search?size=12',
	    {
	      mode:'no-cors'
	    })
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // alert(JSON.stringify(responseJson.hits.hits));
	        this.setState({
	          books: responseJson.hits.hits
	        }, function() {
	          // do something with new state
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	} else if (event.target.value.length < 3 && this.state.genreFilter.length === 0 && this.state.writerFilter.length > 0) {
  		fetch('/books-store/books/_search?size=12',
	    {
	      mode:'no-cors',
	      method:'POST',
	      body: 
	      window.JSON.stringify({
			  "query": {
			    "bool": {
			      "filter": {
			        "terms": {
			          "writer.keyword": this.state.writerFilter
			        }
			      }
			    }
			  }
			})
	    })
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // alert(JSON.stringify(responseJson.hits.hits));
	        this.setState({
	          books: responseJson.hits.hits
	        }, function() {
	          // do something with new state
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	} else if (event.target.value.length < 3 && this.state.genreFilter.length > 0 && this.state.writerFilter.length === 0) {
  		fetch('/books-store/books/_search?size=12',
	    {
	      mode:'no-cors',
	      method:'POST',
	      body: 
	      window.JSON.stringify({
			  "query": {
			    "bool": {
			      "filter": {
			        "terms": {
			          "genre.name": this.state.genreFilter
			        }
			      }
			    }
			  }
			})
	    })
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // alert(JSON.stringify(responseJson.hits.hits));
	        this.setState({
	          books: responseJson.hits.hits
	        }, function() {
	          // do something with new state
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	}




















  	// if (event.target.value.length > 3) {
  	// // }

	  // 	if (event.target.value === '') {
	  //     fetch('/elibrary/books/_search?size=12',
	  //     { mode:'no-cors' })
	  //       .then((response) => response.json())
	  //       .then((responseJson) => {
	  //         if (responseJson.hits.total > 0) {
	  //         	this.setState({books: responseJson.hits.hits}, function() {
	  //           // do something with new state
	  //         });
	  //         }
	  //       })
	  //       .catch((error) => {
	  //         console.error(error);
	  //       });
	  //     } else {
	  //   fetch('/elibrary/books/_search?size=12',
	  //   {
	  //     mode:'no-cors',
	  //     method:'POST',
	  //     body: 
	  //     window.JSON.stringify({
	  //       "query": {
	  //           "multi_match" : {
	  //           	"query" : this.state.searchInput,
	  //               "fuzziness":"AUTO",
	  //               "fields": ["title","description","writer"]
	  //               }
	  //           }
	  //       })


	  //   })
	  //     .then((response) => response.json())
	  //     .then((responseJson) => {
	  //       // alert(JSON.stringify(responseJson.hits.hits));
	  //       this.setState({
	  //         books: responseJson.hits.hits
	  //       }, function() {
	  //         // do something with new state
	  //       });
	  //     })
	  //     .catch((error) => {
	  //       console.error(error);
	  //     });
	  //   }

   //  } else if (event.target.value.length < 3) {
	  //     fetch('/elibrary/books/_search?size=12',
	  //     { mode:'no-cors' })
	  //       .then((response) => response.json())
	  //       .then((responseJson) => {
	  //         if (responseJson.hits.total > 0) {
	  //         	this.setState({books: responseJson.hits.hits}, function() {
	  //           // do something with new state
	  //         });
	  //         }
	  //       })
	  //       .catch((error) => {
	  //         console.error(error);
	  //       });
	  //     }
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
      <div className="App">
        <header className="senka" >
        	<span className="logo-btn">
	          <a href="index.html">
	            <img src="images/logo.png" style={imgStyle} alt="logo" />
	          </a>
	        </span>
	        <span>
	          <form role="search">
	            <div className="form-group has-feedback searchBtn" style={divStyle}>
	              <input 
	                id="searchInput" 
	                name="searchInput" 
	                defaultValue={this.state.searchInput} 
	                type="text" className="form-control" 
	                placeholder="Pretraga..." 
	                style={inputStyle}
	                onChange={this.onChangeSearchInput.bind(this)} 
	              />
	              <i className="glyphicon glyphicon-search form-control-feedback" style={iStyle}></i>
	            </div>
	          </form>
	        </span>
        </header>
        <aside>
        	<FilterBar checkedGenres={this.state.genreFilter} checkedWriters={this.state.writerFilter}  />
        </aside>
        <main>
        	<BookList books={this.state.books} />
        </main>
      </div>
    );
  }
}

export default App;

// <main className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </main>


// return (
//       <div className="App">
//         <header className="senka" >
//         	<SearchBar 
//         		searchInput={this.state.searchInput} 
//         		changeSearchInput={this.onChangeSearchInput.bind(this)} 
//         	/>
//         </header>
//         <aside>
//         	<FilterBar />
//         </aside>
//         <main>
//         	<BookList books={this.state.books} />
//         </main>
//       </div>
//     );

//   search bar :
// <SearchBar 
//         		searchInput={this.state.searchInput} 
//         		changeSearchInput={this.onChangeSearchInput.bind(this)} 
//         	/>




// ------------------------- Upit koji ce se koristiti za pun upit = fuzzySearchInput + genreFilter + writerFilter
// {
//   "query": {
//     "bool": {
//       "must": {
//         "multi_match": {
//         "fields":  [ "title", "description" ],
//         "query":     "kings",
//         "fuzziness": "AUTO"
//       }
//       },
//       "filter": {
//         "terms": {
//           "genre.name": ["fantasy","teenage"]
//         }
//       },
//       "filter": {
//         "terms": {
//           "writer": ["martin","tolkien"]
//         }
//       }
//     }
//   }
// }