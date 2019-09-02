import { connect } from "react-redux";
import MessageView from './message_view';

import { fetchAllMessages, addMessage } from '../../actions/message_actions';

const mapStateToProps = (
  { session, entities: { users, selectedConversation, messages } }
) => {
  return {
    currentUser: users[session.id],
    selectedConversation: selectedConversation,
    messages: Object.values(messages)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllMessages: conversationId => dispatch(fetchAllMessages(conversationId)),
  addMessage: message => dispatch(addMessage(message))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageView);