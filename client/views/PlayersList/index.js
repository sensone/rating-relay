import Relay from 'react-relay/classic';
import PlayersList from './PlayersList';
import PlayerItem from '../../components/PlayerItem';

export default Relay.createContainer(
  PlayersList,
  {
    initialVariables: {sort: 'RATING_COMBINED_DESC'},
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          playerConnection (first: 1000, sort: $sort) {
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
);
