import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
  render() {
    const { posts, onDelete, onReadMore } = this.props;

    return (
      <div>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onDelete={onDelete}
            onReadMore={onReadMore}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
