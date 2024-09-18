import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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


  render() {
    return (
      <div>
        <Header />
        <PostForm onAddPost={this.handleAddPost} />

        <Footer />
      </div>
    );
  }
}

export default App;
