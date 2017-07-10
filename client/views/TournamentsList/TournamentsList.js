import React from 'react';
import template from './TournamentsList.rt';

export default class TournamentsList extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return template.call(this);
  }
}
