import React, { useState, useEffect } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("react");
  const [news, setNews] = useState([]);

  // fetch news
  const fetchNews = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then((result) => result.json())
      .then((data) => setNews(data.hits))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [searchQuery]); // Run the effect whenever searchQuery changes

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>News</h2>
      <form>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  );
};

export default App;
































// import React, { Component } from "react";

// class App extends Component {

//   state = {
//     count: 0
//   }

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.increment}>
//          button clicked {this.state.count} times
//         </button>
//       </div>
//     )

//   }
// }

// export default App;
