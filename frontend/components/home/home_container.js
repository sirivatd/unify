import { connect } from 'react-redux';

import Home from './home';

const mapStateToProps = ({ session, entities: { users, selectedCategory } }) => {
  return {
    currentUser: users[session.id],
    selectedCategory: selectedCategory
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);