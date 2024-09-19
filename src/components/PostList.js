import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostListContainer = styled.div`
  width: 100%;
`;


class PostList extends React.Component {
  render() {
    const { posts, onDelete, onReadMore } = this.props;

    return (
      <PostListContainer>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onDelete={onDelete}
            onReadMore={onReadMore}
          />
        ))}
      </PostListContainer>
    );
  }
}

export default PostList;
