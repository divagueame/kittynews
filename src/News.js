import React from "react";
import Article from "./Article";

const News = ({news}) => {
  console.log("In news...")

  return (
    <div>


  
{news.map((article,i) => {
    return <Article article={article} key={i} />; 
  })}

    </div>
  );
};

export default News;
