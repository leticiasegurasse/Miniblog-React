import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

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


  render() {
    return (
      <div>
        <Header />
        <PostForm onAddPost={this.handleAddPost} />
        <PostList
          posts={this.state.posts}
          onDelete={this.handleDeletePost}
          onReadMore={this.handleReadMore}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
