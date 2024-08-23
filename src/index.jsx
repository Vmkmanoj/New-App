import React, { useEffect, useState } from "react";
import "./App.css";

function Mortal(){


    const [news,setNews] = useState([]);

    const [pageload,setPageload]  = useState([]);

    const [topics,setTopic] = useState("business");


    const api = async () =>{


        let apikey = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=79052ea9c63248179ef0f6775ae5c728";
        let fec = await fetch(apikey);
        let json = await fec.json()
        setTimeout(()=>{
            setNews(json.articles);
        },2000)

      

       

        console.log(json)

        console.log(pageload)

        console.log(topics)

    }

    function handlclick(url){
        setPageload(url)
        window.open(url,"_blank")

    }


    useEffect(()=>{
        api(pageload)
    },[topics])




    return (
        <div className="container">
              <select className="select" value={topics} onChange={(e)=>setTopic(e.target.value)}>
                    <option value="business headlines">business headlines</option>
                    <option  value="TechCrunch" >TechCrunch</option>
                </select>
          {news.map((article, index) => (
            <div key={index} className="news-item">
              
              <img src={article.urlToImage} onClick={()=>handlclick(article.url)} alt={article.title} className="news-image" />
              <h2 className="news-title">{article.title}</h2>
            </div>
          ))}
        </div>
      );
    }
    



export default Mortal