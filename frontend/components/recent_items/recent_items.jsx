import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles.scss';

class RecentItems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    return (
      <div className="recent-items-section">
      <h2 className="recent-items-header">
        Recently uploaded items
      </h2>
      </div>
    );
  }
}

export default RecentItems;