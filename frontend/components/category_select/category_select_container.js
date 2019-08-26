import { connect } from "react-redux";
import CategorySelect from './category_select';

const mapStateToProps = (
  { session, entities: { users } }
) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(
  mapStateToProps,
  null
)(CategorySelect);