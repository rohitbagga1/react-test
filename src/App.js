import React, { useState, useEffect } from "react";

const App = () => {
  // state
  const [news, setNews] = useState([]);

  // fetch news
  const fetchNews = () => {
    return fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((result) => result.json())
      .then((data) => setNews(data.hits))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>News</h2>
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
