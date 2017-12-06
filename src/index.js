import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import BookItemList from './Components/BookItemList';
// import BookList from './Components/BookList';
// import SearchBar from './Components/SearchBar';
// import FilterBar from './Components/FilterBar';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<FilterBar />, document.getElementById('rootBody'));

// var imgStyle = {
//       width: '180px',
//       height: '100px',
//     };
// var divStyle = {
//       position: 'absolute',
//       width: 'calc(100% - 350px)',
//     };
// var inputStyle = {
//       backgroundColor: '#FFCC80', 
//       color: '#E65100'
//     };
// var iStyle = {
//       color: '#E65100',
//     };

// ReactDOM.render(<div>
// 	<span className="logo-btn">
//           <a href="index.html">
//             <img src="images/logo.png" style={imgStyle} />
//           </a>
//         </span>
//         <span>
//           <form role="search">
//             <div className="form-group has-feedback searchBtn" style={divStyle}>
//               <input id="searchInput" name="searchInput" defaultValue="Bla Bla Bla" type="text" className="form-control" placeholder="Pretraga..." style={inputStyle} />
//               <i className="glyphicon glyphicon-search form-control-feedback" style={iStyle}></i>
//             </div>
//           </form>
//         </span>
// 	</div>, document.querySelector('header'));
// var searchInputVrednost = 'hobbit';

// ReactDOM.render(<SearchBar searchInput={searchInputVrednost} />,document.querySelector('header'));
// ReactDOM.render(<FilterBar />,document.querySelector('aside'));

// ReactDOM.render(<BookList searchInput={searchInputVrednost} search='harry potter' />, document.querySelector('main'));



ReactDOM.render(<App />,document.getElementById('root'));

// ReactDOM.render(<section id="booksListSection">
// 		<BookItemList title="The Hobbit" slug="the-hobbit" author="J.R.R. Tolkien" image="Hobbit_cover.JPG" description="About a Bilbo Baggins' adventure at the Middle-Earth." />
// 		<BookItemList title="The Lord Of The Rings" slug="the-lotr" author="J.R.R. Tolkien" image="lotr.jpg" description="About a dark lord Sauron and his ring of power." />
// 		<BookItemList title="Game of Thrones" slug="game-of-thrones" author="George R.R. Martin" image="GameOfThrones.jpg" description="Hodor hodor hodor. Hodor hodor HODOR! Hodor hodor hodor hodor hodor?! Hodor hodor - hodor, hodor. Hodor HODOR hodor, hodor hodor hodor hodor. Hodor." />
// 		<BookItemList title="A Song of Ice And Fire" slug="a-song-of-ice-and-fire" author="George R.R. Martin" image="A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg" description="Dosta mi je lorem ipsuma i svih ostalih ipsuma... .. .. . " />
// 		<BookItemList title="Feast for Crows" slug="feast-for-crows" author="George R.R. Martin" image="lotr.jpg" description="Hodor hodor HODOR! Hodor hodor - hodor hodor hodor, hodor. Hodor hodor hodor! Hodor hodor hodor hodor; hodor hodor. Hodor hodor, hodor. Hodor hodor hodor? Hodor! Hodor hodor, hodor hodor hodor - hodor, hodor. Hodor hodor. Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor..." />
// 		<BookItemList title="Dance with Dragons" slug="dance-with-dragons" author="George R.R. Martin" image="dragons05.jpg" description="Hodor hodor HODOR! Hodor hodor - hodor hodor hodor, hodor. Hodor hodor hodor! Hodor hodor hodor hodor; hodor hodor. Hodor hodor, hodor. Hodor hodor hodor? Hodor! Hodor hodor, hodor hodor hodor - hodor, hodor. Hodor hodor. Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor..." />
// 		<BookItemList title="Harry Potter and the Chamber of Secret" slug="harry-potter-2" author="J.K. Rowling" image="lotr.jpg" description="Hodor hodor HODOR! Hodor hodor - hodor hodor hodor, hodor. Hodor hodor hodor! Hodor hodor hodor hodor; hodor hodor. Hodor hodor, hodor. Hodor hodor hodor? Hodor! Hodor hodor, hodor hodor hodor - hodor, hodor. Hodor hodor. Hodor, hodor. Hodor." />
// 		<BookItemList title="Eragon" slug="eragon" author="Christopher Paolini" image="Eragon_book_cover.png" description="The book tells the story of a farm boy named Eragon, who finds a mysterious stone in the mountains. Not knowing the stone's origin or worth, he attempts to use it as payment to a butcher. A dragon he later names Saphira hatches from the stone, which was really an egg. When the evil King Galbatorix finds out the general location of the egg he sends the Ra'zac to acquire it. By that time Saphira had been growing for a while and takes Eragon to the Spine after Ra'zac appear in their village Carvahall. Eragon and Saphira are forced to flee from their hometown, with a storyteller called Brom, and decide to search for the Varden, a group of rebels who want the downfall of Galbatorix." />
// 	</section>, document.querySelector('main'));
registerServiceWorker();
