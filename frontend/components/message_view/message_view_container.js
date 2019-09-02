import { connect } from "react-redux";
import MessageView from './message_view';

const mapStateToProps = (
  { session, entities: { selectedConversation } }
) => {
  return {
    selectedConversation: selectedConversation
  };
};

export default connect(
  mapStateToProps,
  null
)(MessageView);