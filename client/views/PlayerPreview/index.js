import Relay from 'react-relay';
import PlayerPreview from './PlayerPreview';

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
            tournaments {
              _id
              title
              date
              players_count
              type
              weight
              operable
              result {
                place
                points
              }
            }
          }
        }
      `,
    },
  },
);
