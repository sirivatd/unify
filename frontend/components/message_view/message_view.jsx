import React from "react";

import './styles.scss';

class MessageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
  }
 
  render() {
    const { selectedConversation } = this.props;

    return (
      <div className="message-view-content">
        I'm a conversation between { selectedConversation.sender_name} and { selectedConversation.recipient_name}
        <div className="send-message-section">
          <div className="message-form-box">
            <input type="text"
              value={this.state.messageText}
              onChange={this.update('messageText')}
              className="message-form-input"
              placeholder="Send a message"
            />
            <img className="upload-message-icon" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fsend-button.png?alt=media&token=1f3d18ce-9869-415e-ad6b-efcf24446a3b" onClick={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default MessageView;