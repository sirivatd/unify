import { connect } from 'react-redux';

import ItemPreview from './item_preview';

const mapStateToProps = (props, ownProps) => {
  return {
    item: ownProps.item
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemPreview);