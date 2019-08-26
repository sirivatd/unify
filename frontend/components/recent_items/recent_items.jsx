import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles.scss';

class RecentItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="recent-items-section">
      This is the recent items section
    </div>
    );
  }
}

export default RecentItems;