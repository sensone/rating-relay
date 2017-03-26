import React from 'react';
import Relay from 'react-relay';

import template from './PlayerPreview.rt';

class PlayerPreview extends React.Component {
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
  PlayerPreview,
  {
    initialVariables: {
      _id: null,
    },
    fragments: {
      viewer: (variables) => Relay.QL`
        fragment on Viewer {
          playerById(_id: $_id) {
            name
            gender
            city
          }
        }
      `,
    },
  },
)
