import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 80%;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  text-align: justify;

  h2 {
    margin-top: 0;
  }

  button {
    margin-top: 20px;
    padding: 8px 12px;
    background-color: #6200ee;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
    background-color: #3700b3;
  }
`;

class Modal extends React.Component {
  render() {
    const { show, onClose, post } = this.props;

    if (!show) {
      return null;
    }

    return (
      <ModalBackground onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={onClose}>Fechar</button>
        </ModalContent>
      </ModalBackground>
    );
  }
}

export default Modal;
