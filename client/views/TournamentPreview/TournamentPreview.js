import React from 'react';
import template from './TournamentPreview.rt';

export default class TournamentPreview extends React.Component {
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
