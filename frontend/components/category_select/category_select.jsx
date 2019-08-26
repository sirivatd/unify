import React from "react";
import { withRouter } from "react-router-dom";

import './styles.scss';

class CategorySelect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    return (
      <div className="category-select-section">
        This is the category select section
      </div>
    )
  }
}

export default withRouter(CategorySelect);