import React from "react";
import "./styles.css";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Results from "./components/Results";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: {
        loading: false,
        error: false,
        data: []
      }
    };
  }
  fixGifs = str => {
    this.setState({
      ...this.state.gifs,
      loading: true
    });
    axios
      .get("https://api.tenor.com/v1/search?q=" + str + "&key=CFKAU6J14T1L")
      .then(results => {
        //console.log(results);
        this.setState({
          gifs: {
            ...this.state.gifs,
            data: [...results.data.results],
            loading: false
          }
        });
        //console.log(this.state.gifs.data);
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <h1>Ma name 'a' GIF.</h1>
        <h2>Search your lucky GIF here!</h2>
        <Form fixGifs={this.fixGifs} />
        {this.state.gifs.loading && <Loading />}
        {this.state.gifs.data.length !== 0 && (
          <Results gifs={this.state.gifs.data} />
        )}
      </div>
    );
  }
}
