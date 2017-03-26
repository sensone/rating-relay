import { Component } from 'react';
import template from './Header.rt';

export default class Header extends Component {
  render() {
    return template.call(this);
  }
}
