import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
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
    this.state = {
      posts: [],
      showModal: false,
      selectedPost: null,
    };
  }

  handleAddPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    this.setState((prevState) => ({
      posts: [newPost, ...prevState.posts],
    }));
  }

  handleDeletePost = (id) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.id !== id),
    }));
  }

  handleReadMore = (post) => {
    this.setState({ showModal: true, selectedPost: post });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedPost: null });
  }

  render() {
    return (
      <Container>
        <Header />
        <PostForm onAddPost={this.handleAddPost} />
        <PostList
          posts={this.state.posts}
          onDelete={this.handleDeletePost}
          onReadMore={this.handleReadMore}
        />
        <Modal
          show={this.state.showModal}
          onClose={this.handleCloseModal}
          post={this.state.selectedPost}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;
