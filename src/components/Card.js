import React from "react";

const Card = ({article}) => {
  return (
    <>
      <div class="card">
        
        <div class="info">
          <p class="title">{article.attributes.heading}</p>
          <p>
            {article.attributes.description}sdfsf
          </p>
        </div>
        <div class="footer">
          <p class="tag">{article.attributes.author} </p>
          <button type="button" class="action">
            Get started{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
