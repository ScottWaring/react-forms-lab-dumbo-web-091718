import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
    };
  }

  handleChange(event) {
    this.setState({
      tweet: event.target.value,
      remainChars: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
      <h3>Remaining characters {this.state.remainChars}</h3>
        <strong>Your message:</strong>

        <input onChange={event => this.handleChange(event)} value={this.state.tweet} type="text" />
        <h2>{this.state.tweet}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
