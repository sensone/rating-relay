import { PureComponent } from 'react';
import template from './Footer.rt';
import './Footer.css';

export default class Footer extends PureComponent {

  render() {
    return template.call(this);
  }
}
