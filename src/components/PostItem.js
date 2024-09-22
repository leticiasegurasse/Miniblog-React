import React from 'react';
import './PostItem.css';

class PostItem extends React.Component {
  render() {
    const { post, onDelete, onReadMore } = this.props;

    // Cria um preview do conteúdo com no máximo 100 caracteres
    const contentPreview = post.content.length > 100
      ? post.content.substring(0, 100) + '...'
      : post.content;

    return (
      <div className="post-container">
        <img src={post.imageUrl || 'https://picsum.photos/300/150'} alt="Imagem do Post" />

        <div className="post-content">
          <h2>{post.title}</h2>
          
          <p>{contentPreview}</p>

          {/* Botão "Leia mais" aparece somente se o conteúdo for maior que 100 caracteres */}
          {post.content.length > 100 && (
            <button onClick={() => onReadMore(post)}>Leia mais</button>
          )}
          
          <button onClick={() => onDelete(post.id)}>Deletar</button>
        </div>
      </div>
    );
  }
}

export default PostItem;
