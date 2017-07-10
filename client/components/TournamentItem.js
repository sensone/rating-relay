import React from 'react';
import Relay from 'react-relay/classic';

import template from './TournamentItem.rt';

class TournamentItem extends React.Component {
  static propTypes = {
    tournament: React.PropTypes.object,
    place: React.PropTypes.number
  }

  constructor(props) {
    super(props);
  }

  render() {
    return template.call(this);
  }
}

export default Relay.createContainer(
  TournamentItem,
  {
    fragments: {
      tournament: () => Relay.QL`
        fragment on Tournament {
          _id
          title
        }
      `,
    },
  },
)
