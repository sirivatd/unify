import { connect } from "react-redux";
import CategorySelect from './category_select';
import { fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = (
  { session, entities: { users, categories } }
) => {
  return {
    currentUser: users[session.id],
    categories: Object.values(categories)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySelect);