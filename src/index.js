import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import _ from 'lodash';
const API_Key = 'AIzaSyCAn6huZ-SWnb1qo03cihW8-Pz0vhrlVEU';



// Create a new component. This component should produce
//some HTML

//ES6 "const" - declare a variable that is final or never going to change
//JSX - a dialect of javascript, babel transpile it into vanilla javascript
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   )
// } <--------- Functional Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    // YTSearch({key: API_Key, term: 'surfboards'}, (videos) => {
    //   this.setState({ videos }); // when the key and the value have the same name
    // });

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_Key, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);

    return (
      <div>

        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>

      </div>
    );
  }
}
// SearchBar onSearchTermChange={term => this.videoSearch(term)}
// VideoList Passing prop to the child component

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
