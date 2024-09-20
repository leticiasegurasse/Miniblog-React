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

  onAddPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    this.setState((prevState) => ({
      posts: [newPost, ...prevState.posts],
    }));
  }

  onDeletePost = (id) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.id !== id),
    }));
  }

  onReadMore = (post) => {
    this.setState({ showModal: true, selectedPost: post });
  }

  onCloseModal = () => {
    this.setState({ showModal: false, selectedPost: null });
  }

  render() {
    return (
      <Container>
        <Header />
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
