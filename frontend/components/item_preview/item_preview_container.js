import { connect } from 'react-redux';

import { addFavorite } from '../../actions/favorite_actions';
import { deleteFavorite } from '../../actions/favorite_actions';
import ItemPreview from './item_preview';

const mapStateToProps = (props, ownProps) => {
  return {
    item: ownProps.item,
    favoriteIds: ownProps.favoriteIds
  };
};

const mapDispatchToProps = dispatch => ({
  addFavorite: itemId => dispatch(addFavorite(itemId)),
  deleteFavorite: itemId => dispatch(deleteFavorite(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPreview);