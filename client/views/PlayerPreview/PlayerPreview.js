import React from 'react';

import template from './PlayerPreview.rt';

export default class PlayerPreview extends React.Component {
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
