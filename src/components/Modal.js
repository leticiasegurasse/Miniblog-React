import React from 'react';
import './Modal.css'; 

class Modal extends React.Component {
  render() {
    const { show, onClose, post } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="modal-background" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    );
  }
}

export default Modal;
