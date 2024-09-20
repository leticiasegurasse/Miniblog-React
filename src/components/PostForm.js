import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  margin: 20px auto;
  width: 70%;
  display: flex;
  flex-direction: column;

  input[type='text'],
  input[type='url'],
  textarea {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  button {
    padding: 10px;
    background-color: #6200ee;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #3700b3;
  }
`;

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      imageUrl: '',
    };
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  }
  
  onChangeContent = (event) => {
    this.setState({ content: event.target.value });
  }
  
  onChangeImageUrl = (event) => {
    this.setState({ imageUrl: event.target.value });
  }
  

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddPost(this.state);
    this.setState({ title: '', content: '', imageUrl: '' });
  }

  render() {
    return (
      <FormContainer onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={this.state.title}
          onChange={this.onChangeTitle}
          maxLength="50"
          required
        />
        <textarea
          name="content"
          placeholder="Conteúdo"
          value={this.state.content}
          onChange={this.onChangeContent}
          required
        />
        <input
          type="url"
          name="imageUrl"
          placeholder="URL da Imagem (opcional)"
          value={this.state.imageUrl}
          onChange={this.onChangeImageUrl}
        />
        <button type="submit">Postar</button>
      </FormContainer>
    );
  }
}

export default PostForm;
