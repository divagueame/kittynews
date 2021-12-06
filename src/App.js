import "./App.css";
// import * as React from "react";
import React, {useState, useEffect} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import News from "./News";

function App() { 

  const [news, setNews] = useState([])
  const [page, setPage] = useState([1])
  
  const [currentUrl, setCurrentUrl] = useState('https://newsapi.org/v2/everything?q=cat&apiKey=f0de508a427043c881d2e185b12c222d')

  
  

  useEffect(()=>{ 
    axios.get(currentUrl).then(res=>{
      setNews(res.data.articles)
      console.log(res.data)
    })
    
  },[])
  
const nextBtnClick = ()=>{
  console.log("next")
}


  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Button onClick={nextBtnClick}>Next</Button>
        <News news={news}/> 
      </div>
    </React.Fragment>
  );
}

export default App;
