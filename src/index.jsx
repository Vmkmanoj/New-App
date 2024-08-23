import React, { useEffect, useState } from "react";
import "./App.css";

function Mortal(){


    const [news,setNews] = useState([]);

    const [pageload,setPageload]  = useState([]);


    const api = async () =>{


        let apikey = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=79052ea9c63248179ef0f6775ae5c728";

        let fec = await fetch(apikey);

        let json = await fec.json()

        setTimeout(()=>{

            setNews(json.articles);

        },2000)

       

        console.log(json)

        console.log(pageload)

    }


    useEffect(()=>{
        api()
    },[pageload])




    return (
        <div className="container">
          {news.map((article, index) => (
            <div key={index} className="news-item">
              <img src={article.urlToImage} onClick={()=>setPageload(article.url)} alt={article.title} className="news-image" />
              <h2 className="news-title">{article.title}</h2>
            </div>
          ))}
        </div>
      );
    }
    



export default Mortal