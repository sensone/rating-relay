import React from 'react';
import Relay from 'react-relay';

import template from './PlayerItem.rt';

class PlayerItem extends React.Component {
  static propTypes = {
    player: React.PropTypes.object,
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
  PlayerItem,
  {
    fragments: {
      player: () => Relay.QL`
        fragment on Player {
          _id
          name
        }
      `,
    },
  },
)
