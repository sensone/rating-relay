import Relay from 'react-relay/classic';
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
              date_formated
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
