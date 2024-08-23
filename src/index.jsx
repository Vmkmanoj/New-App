import React, { useEffect, useState } from "react";
import "./App.css";

function Mortal(){


    const [news,setNews] = useState([]);

    const [pageload,setPageload]  = useState([]);

    const [topics,setTopic] = useState("business headlines");


    const api = async () =>{



      
      if(topics==="business headlines"){

        let apikey = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=79052ea9c63248179ef0f6775ae5c728";
        let fec = await fetch(apikey);
        let json = await fec.json()
  
        setNews(json.articles);
        console.log(json)

        console.log(pageload)

        console.log(topics)
      }else if(topics==="TechCrunch"){

        let apikey = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=79052ea9c63248179ef0f6775ae5c728";
        let fec = await fetch(apikey);
        let json = await fec.json()
       
            setNews(json.articles);
  
        console.log(json)

        console.log(pageload)

        console.log(topics)

      }else if(topics==="Apple"){

        let apikey = "https://newsapi.org/v2/everything?q=apple&from=2024-08-22&to=2024-08-22&sortBy=popularity&apiKey=79052ea9c63248179ef0f6775ae5c728";
        let fec = await fetch(apikey);
        let json = await fec.json()
       
            setNews(json.articles);
  
        console.log(json)

        console.log(pageload)

        console.log(topics)

      }else if(topics==="Tesla"){

        let apikey = "https://newsapi.org/v2/everything?q=tesla&from=2024-07-23&sortBy=publishedAt&apiKey=79052ea9c63248179ef0f6775ae5c728";
        let fec = await fetch(apikey);
        let json = await fec.json()
       
            setNews(json.articles);
  
        console.log(json)

        console.log(pageload)

        console.log(topics)

      }

    }

    function handlclick(url){
        setPageload(url)
        window.open(url,"_blank")

    }


    useEffect(()=>{
        api(pageload)
    },[topics])




    return (
      <div className="Main">

        <div className="select-bar">

        <select className="select" value={topics} onChange={(e)=>setTopic(e.target.value)}>
                    <option value="business headlines">business headlines</option>
                    <option  value="TechCrunch" >TechCrunch</option>
                    <option  value="Apple" >Apple</option>
                    <option  value="Tesla">Tesla</option>
                </select>

        </div>

             


        <div className="container">
              
          {news.map((article, index) => (
            <div key={index} className="news-item">
              
              <img src={article.urlToImage} onClick={()=>handlclick(article.url)} alt={article.title} className="news-image" />
              <h2 className="news-title">{article.title}</h2>
            </div>
          ))}
        </div>

        </div>
      );
    }
    



export default Mortal