import { Component } from 'react';
import template from './AppLayout.rt';
import './AppLayout.css';

export default class AppLayout extends Component {

  render() {
    return template.call(this);
  }
}
