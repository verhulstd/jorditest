import React from "react";

export default class Props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoekHet: {
        value: "",
        error: false
      }
    };
  }

  veldAanpassen = e => {
    this.setState({
      zoekHet: {
        ...this.state.zoekHet,
        value: e.target.value,
        error: false
      }
    });
  };
  submitHandler = e => {
    e.preventDefault();
    if (this.state.zoekHet.value !== "") {
      this.props.fixGifs(this.state.zoekHet.value);
    } else {
      this.setState({
        zoekHet: {
          ...this.state.zoekHet,
          error: true
        }
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.zoekHet.value}
          onChange={this.veldAanpassen}
          className={this.state.zoekHet.error ? "error" : ""}
        />
        <input type="submit" value="Start Quest!" className="button" />
      </form>
    );
  }
}
