import React, { Component } from 'react';

class FilterBar extends Component {
  constructor(props) {
    super();
      this.state = {
        genres: [],
        checkedGenres: props.checkedGenres,
        checkedWriters: props.checkedWriters,
        categories: [
          {
            'id':'1',
            'name':'Fantasy'
          },
          {
            'id':'2',
            'name':'Teenage'
          },
          {
            'id':'3',
            'name':'Romance'
          },
          {
            'id':'4',
            'name':'Horror'
          },
          {
            'id':'5',
            'name':'Historian'
          },
          {
            'id':'6',
            'name':'Science fiction'
          },
          {
            'id':'7',
            'name':'Satire'
          },
          {
            'id':'8',
            'name':'Drama'
          },
          {
            'id':'9',
            'name':'Action'
          },
          {
            'id':'10',
            'name':'Mystery'
          },
          {
            'id':'11',
            'name':"Children's"
          },
          {
            'id':'12',
            'name':'Comics'
          },
          {
            'id':'13',
            'name':'Science'
          }
        ],
        'writers': [
          {
            'id':'1',
            'name':'J.R.R. Tolkien',
            'filter':'tolkien'
          },
          {
            'id':'2',
            'name':'George R.R. Martin'
          },
          {
            'id':'3',
            'name':'J.K. Rowling'
          },
          {
            'id':'4',
            'name':'Jack London'
          },
          {
            'id':'5',
            'name':'Edgard Allan Paul'
          },
          {
            'id':'6',
            'name':'Steven King'
          }
        ]
      };
    }

  componentDidMount() {
    // fetch('/books-store/genres/_search?size=16',{mode:'no-cors'})
    fetch('/elibrary/genres/_search?size=20',{mode:'no-cors'})
      .then((response) => response.json())
      .then((responseJson) => {
        // alert(JSON.stringify(responseJson.hits.hits));
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          title: responseJson.took,
          genres: responseJson.hits.hits
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });

// -- GET WRITERS --
    fetch('/books-store/books/_search',
      {
        mode:'no-cors',
        method:'POST',
        body: 
        window.JSON.stringify({
          "query": {
            "match_all": { }
          },
          "aggs": { 
          "top_writers": { 
            "terms": { 
            "field": "writer.keyword"
            }
          }
          }
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // alert(JSON.stringify(responseJson.hits.hits));
          this.setState({
            writers: responseJson.aggregations.top_writers.buckets
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
  }
  addToFilter(event) {
    var checksGenre = document.getElementsByClassName('checksGenre');
    // var str = '';
    // this.setState.checkedGenres = [];
    this.setState({checkedGenres: []});
    this.props.checkedGenres.splice(0,this.props.checkedGenres.length);
    // this.state.checkedGenres.splice(0,this.state.checkedGenres.length);

    for (var i = checksGenre.length - 1; i >= 0; i--) {
      // checksGenre[i]
      if (checksGenre[i].checked === true) {
        // str += checksGenre[i].name + ", ";
        // this.state.checkedGenres.push(checksGenre[i].name.substring(1).slice(0,-1));
        this.props.checkedGenres.push(checksGenre[i].name.substring(1).slice(0,-1));
        // checkedGenres.push(checksGenre[i].value);
      }
    }

    // -- writers - checked

    var checksWriter = document.getElementsByClassName('checksWriter');
    // var str = '';
    // this.setState.checkedGenres = [];
    this.setState({checkedWriters: []});
    this.props.checkedWriters.splice(0,this.props.checkedWriters.length);
    // this.state.checkedGenres.splice(0,this.state.checkedGenres.length);

    for (var i = checksWriter.length - 1; i >= 0; i--) {
      // checksGenre[i]
      if (checksWriter[i].checked === true) {
        // str += checksGenre[i].name + ", ";
        // this.state.checkedGenres.push(checksGenre[i].name.substring(1).slice(0,-1));
        this.props.checkedWriters.push(checksWriter[i].name.substring(1).slice(0,-1));
        // checkedGenres.push(checksGenre[i].value);
      }
    }

    // alert(str);
    // this.setState(checkedGenres: checkedGenres);

    // alert("State checked genres: " + this.state.checkedGenres);

    // for (var i = this.state.checkedGenres.length - 1; i >= 0; i--) {
    //   alert("["+(i+1) +"] - " + this.state.checkedGenres[i]);
    // }

    // //---writers =====

    // var checksWriter = document.getElementsByClassName('checksWriter');
    // // var str2 = '';
    // // this.state.checkedWriters = [];
    // this.setState({checkedWriters: []});
    // // this.props.checkedWriters = [];

    // for (var i2 = checksWriter.length - 1; i2 >= 0; i2--) {
    //   // checksWriter[i]
    //   if (checksWriter[i2].checked === true) {
    //     // str2 += checksWriter[i].name + ", ";
    //     // this.state.checkedWriters.push(checksWriter[i2].name);
    //     this.props.checkedWriters.push(checksWriter[i].key.substring(1).slice(0,-1));
    //     // checkedGenres.push(checksGenre[i].value);
    //   }
    // }

    // alert("GENRES: " + JSON.stringify(this.state.checkedGenres));
    // alert("WRITERS: " + JSON.stringify(this.state.checkedWriters));

  }

  render() {
    return (
      <div>
        <h4>Categories</h4>
        <ul>
          {
            this.state.genres.map((genre, i) => {
              return (
                <li key={genre._source.id}>
                  <input 
                  type="checkbox" 
                  className="checksGenre"
                  name={JSON.stringify(genre._source.name.toLowerCase().trim())} 
                  onChange={this.addToFilter.bind(this)}
                  ref={genre._source.name}
                  value={genre._source}
                  />
                  <label>{genre._source.name}</label>
                </li>
              )
            })
          }
        </ul>

        <br/>
        
        <h4>Writers</h4>
        <ul>
          {
            this.state.writers.map((writer, i) => {
              return (
                <li key={writer.id} >
                  <input 
                  type="checkbox" 
                  className="checksWriter"
                  name={JSON.stringify(writer.key)} 
                  onChange={this.addToFilter.bind(this)}
                  ref={writer.key}
                  value={writer.key}
                  />
                  <label>{writer.key}</label><b className="doc-count darkColorText">{writer.doc_count}</b>
                </li>
              )
            })
          }
        </ul>
        <br/>
        <br/>
      </div>
    );
  }
}

export default FilterBar;