import { connect } from 'react-redux';
import { fetchAllConversations, createConversation, removeConversation } from './../../actions/conversation_actions';
import ConversationView from './conversation_view';

const mapStateToProps = ({ session, entities: { users, conversations }}) => {
  return {
    currentUser: users[session.id],
    conversations: Object.values(conversations)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  removeConversation: conversationId => dispatch(removeConversation(conversationId)),
  createConversation: conversation => dispatch(createConversation(conversation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationView);