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
        This is where the messages will go
      </div>
    );
  }
}

export default ConversationView;