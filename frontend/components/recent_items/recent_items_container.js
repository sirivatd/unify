import { connect } from 'react-redux';

import RecentItems from './recent_items';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(
  mapStateToProps,
  null
)(RecentItems);