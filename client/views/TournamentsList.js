import React from 'react';
import Relay from 'react-relay';

import TournamenItem from '../components/TournamentItem';
import template from './TournamentsList.rt';

class TournamentsList extends React.Component {
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
  TournamentsList,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          tournamentConnection (first: 1000) {
            edges {
              node {
                ${TournamenItem.getFragment('tournament')}
              }
            }
          }
        }
      `,
    },
  },
)
