import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    if (this.state.username > 1 && this.state.password > 1) {
      this.props.login(this.state)
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input onChange={event => this.handleChange(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleChange(event)} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button onSubmit={e => this.submitForm(e)} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
// /
