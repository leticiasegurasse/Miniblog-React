import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostListContainer = styled.div`
  width: 100%;
`;

class PostList extends React.Component {
  render() {
    const { posts, onDelete, onReadMore } = this.props; // Desestruturação das props recebidas

    return (
      <PostListContainer>
        {/* Itera sobre o array de posts e renderiza um PostItem para cada post */}
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
