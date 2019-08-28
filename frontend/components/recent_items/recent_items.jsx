import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ItemPreviewContainer from './../item_preview/item_preview_container';

import './styles.scss';

class RecentItems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    const { items } = this.props;

    return (
      <div className="recent-items-section">
        <h2 className="recent-items-header">
          Recently uploaded items
        </h2>
        <div className="item-content-section">
          {items.map((item) => (
            <ItemPreviewContainer item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default RecentItems;