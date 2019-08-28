import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.scss';

class SuccessModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="success-modal-section">
        <div className="success-modal-content animated fadeInUp">
          <div className="checkmark-section">
            <img className="checkmark-icon animated fadeInUp delay-1s" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fcheck-mark.png?alt=media&token=eb1d092a-5e55-44d8-9bf2-883e16d5b3e9" />
          </div>
          <h2 className="success-modal-header">Great!</h2>
          <h4 className="success-modal-subtitle">Your item has been uploaded successfully.</h4>
          <button className="success-modal-confirm-button" onClick={() => this.props.history.push("/")}>
            Start Exploring
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SuccessModal);