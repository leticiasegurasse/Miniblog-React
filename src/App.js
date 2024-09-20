import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Modal from './components/Modal';

const Container = styled.div`
  min-height: 100vh; 
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center; 
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    // Estado inicial da aplicação
    this.state = {
      posts: [], 
      showModal: false, 
      selectedPost: null, 
    };
  }

  // Adiciona uma nova postagem
  onAddPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(), // Gera um ID único baseado na data atual
    };
    this.setState((prevState) => ({
      posts: [newPost, ...prevState.posts], // Adiciona a nova postagem ao início do array de posts
    }));
  }

  // Deleta uma postagem pelo ID
  onDeletePost = (id) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.id !== id), 
    }));
  }

  // Abrir o modal 
  onReadMore = (post) => {
    this.setState({ showModal: true, selectedPost: post }); // Atualiza o estado para mostrar o modal e define a postagem selecionada
  }

  // Fechar o modal
  onCloseModal = () => {
    this.setState({ showModal: false, selectedPost: null }); 
  }

  render() {
    return (
      <Container>
        <Header />
        <Banner />
        
        <PostForm onAddPost={this.onAddPost} />
        
        <PostList
          posts={this.state.posts} 
          onDelete={this.onDeletePost} 
          onReadMore={this.onReadMore} 
        />
        
        <Modal
          show={this.state.showModal} 
          onClose={this.onCloseModal} 
          post={this.state.selectedPost} 
        />
        
        <Footer />
      </Container>
    );
  }
}

export default App;
