import React from 'react';
import Relay from 'react-relay/classic';

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
console.log(Relay)

export default Relay.createContainer(
  PlayerItem,
  {
    fragments: {
      player: () => Relay.QL`
        fragment on Player {
          _id
          id
          name
          rating {
            combined
            os {
              combined
            }
            dyp
            od {
              combined
            }
          }
        }
      `,
    },
  },
)
