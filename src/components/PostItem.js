import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  margin: 20px auto;
  max-width: 800px;
  background-color: #f9f9f9;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 40%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Content = styled.div`
  width: 60%;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    margin-top: 0;
  }

  p {
    line-height: 1.6;
  }

  button {
    margin-top: 10px;
    margin-right: 10px;
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

class PostItem extends React.Component {
  render() {
    const { post, onDelete, onReadMore } = this.props;
    const contentPreview = post.content.length > 100
      ? post.content.substring(0, 100) + '...'
      : post.content;

    return (
      <PostContainer>
        <Image src={post.imageUrl || 'https://picsum.photos/300/200'} alt="Imagem do Post" />
        <Content>
          <h2>{post.title}</h2>
          <p>{contentPreview}</p>
          {post.content.length > 100 && (
            <button onClick={() => onReadMore(post)}>Leia mais</button>
          )}
          <button onClick={() => onDelete(post.id)}>Deletar</button>
        </Content>
      </PostContainer>
    );
  }
}

export default PostItem;
