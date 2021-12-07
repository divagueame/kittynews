import "./App.scss";
// import * as React from "react";
import React, {useState, useEffect} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import News from "./News";
import Header from "./Header";

function App() { 
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentUrl, setCurrentUrl] = useState('')

  
  
  // const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });
  useEffect(()=>{ 
    setLoading(true);
    // let cancel;
    const controller = new AbortController();
    // 1ab8162809dc49dbb8380c360262aa15
    // f0de508a427043c881d2e185b12c222d 
    axios.get('https://newsapi.org/v2/everything',
      {params: {'q': 'cat','page': currentPage, 'pageSize': 6, 'apiKey': '1ab8162809dc49dbb8380c360262aa15'},
      // cancelToken: new axios.CancelToken(c => cancel = c)
      signal: controller.signal
    }).then(res=>{
      
      setLoading(false);
      setNews(res.data.articles)
      console.log(res.data)
    })
    // return ()=> cancel()
    return () => controller.abort()
  },[currentPage])
  
  const nextBtnClick = ()=>{ 
    let newCurrent = currentPage;
    if(newCurrent>=0){
      newCurrent++; 
      setCurrentPage(newCurrent)
    } 
  }
  const prevBtnClick = ()=>{ 
    let newCurrent = currentPage;
    if(newCurrent>1){
      newCurrent--; 
      setCurrentPage(newCurrent)
    }
  }

 const handleChange = ()=> {
   console.log("Hande")
 }

  if(loading) return <CircularProgress />;
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Header />
      Page: {currentPage}
      <Button onClick={prevBtnClick}>Previous</Button>
      <Button onClick={nextBtnClick}>Next</Button>
      <News news={news}/> 

        {/* <Typography>Page: {page}</Typography> */}
{/* <Pagination count={10} page={page} onChange={handleChange} /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
