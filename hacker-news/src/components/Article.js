import React from "react";

function Article({ title, url, author ,objectID }) {
  
  return (
    <div id={objectID} className="article-wrapper">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{url}</p>
    </div>
  );
}

export default Article;
