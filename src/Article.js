import React from "react";
import Button from "@mui/material/Button";

export default function Article({ article }) {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      {article.author && <h6>@{article.author}</h6>}
      <img src={article.urlToImage} alt="" srcset="" />
      <a href={article.url} target="_blank">
        <Button  variant="outlined" size="small">Read more</Button>
      </a>
      
    </div>
  );
}
