import React from 'react';
import Relay from 'react-relay';

import PlayerItem from '../components/PlayerItem';
import template from './PlayersList.rt';

class PlayersList extends React.Component {
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

export default Relay.createContainer(
  PlayersList,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          playerConnection (first: 1000) {
            edges {
              node {
                ${PlayerItem.getFragment('player')}
                _id
              }
            }
          }
        }
      `,
    },
  },
)
