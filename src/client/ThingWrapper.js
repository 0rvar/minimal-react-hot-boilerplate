import React, { PropTypes, Component } from 'react';

import Style from './ThingWrapper.css';

export default class ThingWrapper extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired
  };

  render() {
    const { items } = this.props;

    const itemIds = [];

    for (let key of Object.keys(items)) {
      itemIds.push(key);
    }

    return (
      <div>
        {itemIds.map((id) => <Thing key={id} text={items[id]} />)}
      </div>
    );
  }
}

class Thing extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className={Style.thing}>
        { text }
      </div>
    );
  }
}
