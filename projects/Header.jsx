import React, { Component } from 'react';

const WELCOME_STR = 'Welcome to React';
const STOP_STR = 'Stop React';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogo: true,
    };
  }

  handleClick = () => {
    this.setState({ showLogo: !this.state.showLogo });
  };

  render() {
    const { showLogo } = this.state;

    return (
      <div>
        <img
          src={this.props.logo}
          className={'App-logo' + (showLogo ? ' rotate' : '')}
          alt="logo"
          onClick={this.handleClick}
        />
        <h1 className="App-title">{showLogo ? WELCOME_STR : STOP_STR} </h1>
      </div>
    );
  }
}

export default Header;
