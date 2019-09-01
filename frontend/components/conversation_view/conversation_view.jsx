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
    const { conversations } = this.props;

    return (
      <div className="messages-content-section">
        <div className="conversation-view-section">
          This is where the conversations will go
        </div>
        <div className="message-view-section">
          This is where the messages will go
        </div>
      </div>
    );
  }
}

export default ConversationView;