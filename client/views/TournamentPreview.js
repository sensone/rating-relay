import React from 'react';
import Relay from 'react-relay';

import template from './TournamentPreview.rt';

class TournamentPreview extends React.Component {
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
  TournamentPreview,
  {
    initialVariables: {
      _id: null,
    },
    fragments: {
      viewer: (variables) => Relay.QL`
        fragment on Viewer {
          tournamentById(_id: $_id) {
            title
            weight
            city
            date
          }
        }
      `,
    },
  },
)
