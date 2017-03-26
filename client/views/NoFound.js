import React from 'react';
import template from './NoFound.rt';
import './NoFound.css';

export default class NoFound extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: '   404   ',
      description: 'page not   found  ',
      textLength: 9,
      bg: '👴🏻',
      bgTextDescription: '🔞',
      bfTextError: '🆘',
    };
  }

  render() {
    return template.call(this);
  }
}
