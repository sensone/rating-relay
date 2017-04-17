import React from 'react';
import template from './PlayersList.rt';
import './PlayersList.css';

const ASC = 'ASC';
const DESC = 'DESC';

export default class PlayersList extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return template.call(this);
  }

  handleSort(sorting) {
    const relaySort = this.props.relay.variables.sort;
    const isSameField = this.isTheSameField(sorting);
    let newType = DESC;
    let newSorting;

    if (isSameField) {
      const type = relaySort.indexOf(ASC) >= 0 ? ASC : DESC;

      newType = (type === ASC) ? DESC : ASC;
    }

    newSorting = `${sorting}_${newType}`;

    this.props.relay.setVariables({sort: newSorting});
  }

  isTheSameField(sorting) {
    const relaySort = this.props.relay.variables.sort;
    const isSameField = relaySort.indexOf(sorting) >= 0;

    return isSameField;
  }

  getSortingArrow(sorting) {
    const relaySort = this.props.relay.variables.sort;
    const isSameField = this.isTheSameField(sorting);
    let arrow;

    if (isSameField) {
      const type = relaySort.indexOf(ASC) >= 0 ? ASC : DESC;

      arrow = (type === ASC) ? 'up' : 'down';
    }

    return arrow;
  }
}
