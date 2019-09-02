import React from 'react';
import MessageViewContainer from './../message_view/message_view_container';

import './styles.scss';

class ConversationView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllConversations();
  }

  render() {
    const { conversations, currentUser, selectedConversation } = this.props;

    return (
      <div className="messages-content-section">
        <ul className="conversation-view-section">
          <div className="conversation-view-wrapper">
            {conversations.map(conversation => {
              return (
                <li className={"conversation-section-row" + (selectedConversation && parseInt(selectedConversation.id) === parseInt(conversation.id) ? " green-selected" : "")} onClick={() => this.props.selectConversation(conversation)}>
                  <img className="conversation-row-img" src={conversation.item_image_url} />
                  <div className="conversation-row-txt">
                    <h2 className="conversation-row-name">{parseInt(currentUser.id) === conversation.sender_id ? conversation.recipient_name : conversation.sender_name}</h2>
                    <h4 className="conversation-row-date">{conversation.updated_at}</h4>
                  </div>
                </li>
              )
            })}
          </div>
        </ul>
        <div className="message-view-section">
          <MessageViewContainer />
        </div>
        <div className="conversation-item-view-section">
            Item details will go here
        </div>
      </div>
    );
  }
}

export default ConversationView;