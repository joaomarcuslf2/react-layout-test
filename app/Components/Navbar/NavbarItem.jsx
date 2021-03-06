/* @flow */
import React from 'react';

export default class NavbarItem extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<a> {
    return (
      <a className='nav-item menu-item' href={this.props.path} onClick={this.props.handleClick}>
        {this.props.name}
      </a>
    );
  }
}
