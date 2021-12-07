import React from "react";

export default function Article({article}) {
  return (
    <div className="article">
      <h3>{article.title}</h3>
      <h6>{article.author}</h6>
      <img src={article.urlToImage} alt="" srcset=""/>
    </div>
  ); 
  return (
    <ul>
    <li>{article.title}</li>
    {/* <li>{article.author}</li>
    <li>{article.author}</li>
    <li>{article.author}</li>
    <li>{article.author}</li>
    <li>{article.author}</li> */}
      {/* {props} */}
      {/* <ul>
        <li>{news[0].title}</li>
        <li>{news[0].author}</li>
        <li>{news[0].url}</li>
        <img src={news[0].urlToImage} alt="" srcset="" />
        <li>{news[0].description}</li>
      </ul> */}
    
    </ul>
  );
}
