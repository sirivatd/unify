import { connect } from 'react-redux';
import { fetchAllConversations, createConversation, removeConversation, selectConversation } from './../../actions/conversation_actions';
import ConversationView from './conversation_view';

const mapStateToProps = ({ session, entities: { users, conversations, selectedConversation }}) => {
  return {
    currentUser: users[session.id],
    conversations: Object.values(conversations),
    selectedConversation: selectedConversation
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  removeConversation: conversationId => dispatch(removeConversation(conversationId)),
  createConversation: conversation => dispatch(createConversation(conversation)),
  selectConversation: conversation => dispatch(selectConversation(conversation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationView);