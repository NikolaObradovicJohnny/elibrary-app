import React, { Component } from 'react';
import BookItemList from './BookItemList';


class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // search: props.searchInput,
      books: props.books
    };
  }

  // componentWillMount() {
  //   if (this.state.search === '') {
  //     fetch('/elibrary/books/_search?size=12',
  //     { mode:'no-cors' })
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         // alert(JSON.stringify(responseJson.hits.hits));
  //         this.setState({
  //           isLoading: false,
  //           dataSource: responseJson,
  //           title: responseJson.took,
  //           books: responseJson.hits.hits
  //         }, function() {
  //           // do something with new state
  //         });
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
  //               "query" : this.state.search,
  //               "fuzziness":"AUTO",
  //               "fields": ["title","description"]
  //               }
  //           }
  //       })

  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       // alert(JSON.stringify(responseJson.hits.hits));
  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson,
  //         title: responseJson.took,
  //         books: responseJson.hits.hits
  //       }, function() {
  //         // do something with new state
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   }
  // }

  render() {
    if (this.props.books.length == 0) {
      return (<section>
          <article>
            <p> No result..... try with another <strong> search input </strong> </p>
          </article>
        </section>);
    } else
    return (
      <section id="booksListSection">
        {
          this.props.books.map((book, i) => {
            return (
              <BookItemList key={this.props.books.indexOf(book)} title={book._source.title} slug="knjiga" author={book._source.writer} image={book._source.image} description={book._source.description} fileLocation={book._source.file_location} />
            )
           })
        }
        
      </section>
    );
  }
}

export default BookList;

// <h1>naslov {this.state.knjige} </h1>
//         <BookItemList title="The Hobbit" slug="the-hobbit" author="J.R.R. Tolkien" image="Hobbit_cover.JPG" description="About a Bilbo Baggins' adventure at the Middle-Earth." />
//         <BookItemList title="The Lord Of The Rings" slug="the-lotr" author="J.R.R. Tolkien" image="lotr.jpg" description="About a dark lord Sauron and his ring of power." />
//         <BookItemList title="Game of Thrones" slug="game-of-thrones" author="George R.R. Martin" image="GameOfThrones.jpg" description="Hodor hodor hodor. Hodor hodor HODOR! Hodor hodor hodor hodor hodor?! Hodor hodor - hodor, hodor. Hodor HODOR hodor, hodor hodor hodor hodor. Hodor." />
//         <BookItemList title="A Song of Ice And Fire" slug="a-song-of-ice-and-fire" author="George R.R. Martin" image="A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg" description="Dosta mi je lorem ipsuma i svih ostalih ipsuma... .. .. . " />
//         <BookItemList title="Feast for Crows" slug="feast-for-crows" author="George R.R. Martin" image="lotr.jpg" description="Hodor hodor HODOR! Hodor hodor - hodor hodor hodor, hodor. Hodor hodor hodor! Hodor hodor hodor hodor; hodor hodor. Hodor hodor, hodor. Hodor hodor hodor? Hodor! Hodor hodor, hodor hodor hodor - hodor, hodor. Hodor hodor. Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor..." />
//         <BookItemList title="Dance with Dragons" slug="dance-with-dragons" author="George R.R. Martin" image="dragons05.jpg" description="Hodor hodor HODOR! Hodor hodor - hodor hodor hodor, hodor. Hodor hodor hodor! Hodor hodor hodor hodor; hodor hodor. Hodor hodor, hodor. Hodor hodor hodor? Hodor! Hodor hodor, hodor hodor hodor - hodor, hodor. Hodor hodor. Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor..." />
//         <BookItemList title="Harry Potter and the Chamber of Secret" slug="harry-potter-2" author="J.K. Rowling" image="lotr.jpg" description="Hodor hodor HODOR! Hodor hodor - hodor hodor hodor, hodor. Hodor hodor hodor! Hodor hodor hodor hodor; hodor hodor. Hodor hodor, hodor. Hodor hodor hodor? Hodor! Hodor hodor, hodor hodor hodor - hodor, hodor. Hodor hodor. Hodor, hodor. Hodor." />
//         <BookItemList title="Eragon" slug="eragon" author="Christopher Paolini" image="Eragon_book_cover.png" description="The book tells the story of a farm boy named Eragon, who finds a mysterious stone in the mountains. Not knowing the stone's origin or worth, he attempts to use it as payment to a butcher. A dragon he later names Saphira hatches from the stone, which was really an egg. When the evil King Galbatorix finds out the general location of the egg he sends the Ra'zac to acquire it. By that time Saphira had been growing for a while and takes Eragon to the Spine after Ra'zac appear in their village Carvahall. Eragon and Saphira are forced to flee from their hometown, with a storyteller called Brom, and decide to search for the Varden, a group of rebels who want the downfall of Galbatorix." />