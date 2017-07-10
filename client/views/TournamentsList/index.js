import Relay from 'react-relay/classic';
import TournamentsList from './TournamentsList';
import TournamentItem from '../../components/TournamentItem';

export default Relay.createContainer(
  TournamentsList,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          tournamentConnection (first: 1000) {
            edges {
              node {
                ${TournamentItem.getFragment('tournament')}
              }
            }
          }
        }
      `,
    },
  },
)
