import React from 'react';

import './styles.scss';

class ConversationView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllConversations();
  }

  render() {
    const { conversations, currentUser } = this.props;

    return (
      <div className="messages-content-section">
        <ul className="conversation-view-section">
          <div className="conversation-view-wrapper">
            {conversations.map(conversation => {
              return (
                <li className="conversation-section-row">
                  <img className="conversation-row-img" src={conversation.item_image_url} />
                  <div className="conversation-row-txt">
                    <h2 className="conversation-row-name">{ parseInt(currentUser.id) === conversation.sender_id ? conversation.recipient_name : conversation.sender_name }</h2>
                    <h4 className="conversation-row-date">{conversation.updated_at}</h4>
                  </div>
                </li>
              )
            })}
          </div>
        </ul>
        <div className="message-view-section">
          This is where the messages will go
        </div>
      </div>
    );
  }
}

export default ConversationView;