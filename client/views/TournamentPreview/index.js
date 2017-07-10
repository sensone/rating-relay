import Relay from 'react-relay/classic';
import TournamentPreview from './TournamentPreview';

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
            players_count
            date
            results {
              place
              points
              players {
                _id
                name
              }
            }
          }
        }
      `,
    },
  },
)
