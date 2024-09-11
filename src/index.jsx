import React, { useEffect, useState } from "react";
import "./App.css";
import logoNews from "../src/assets/newslogo.png";

function Mortal() {
  const [news, setNews] = useState([]);
  const [pageload, setPageload] = useState([]);
  const [date, setDate] = useState("");
  const [topics, setTopic] = useState("business headlines");

  const api = async () => {
    if (topics === "business headlines") {
      let apikey = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=79052ea9c63248179ef0f6775ae5c728`;
      let fec = await fetch(apikey);
      let json = await fec.json();

      setNews(json.articles);
      console.log(json);
    } else if (topics === "TechCrunch") {
      let apikey = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=79052ea9c63248179ef0f6775ae5c728`;
      let fec = await fetch(apikey);
      let json = await fec.json();

      setNews(json.articles);
      console.log(json);
    } else if (topics === "Apple") {
      let apikey = `https://newsapi.org/v2/everything?q=apple&from=${date}&to=${date}&sortBy=popularity&apiKey=79052ea9c63248179ef0f6775ae5c728`;
      let fec = await fetch(apikey);
      let json = await fec.json();

      setNews(json.articles);
      console.log(json);
    } else if (topics === "Tesla") {
      let apikey = `https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=79052ea9c63248179ef0f6775ae5c728`;
      let fec = await fetch(apikey);
      let json = await fec.json();

      setNews(json.articles);
      console.log(json);
    }
  };

  function datechange(event) {
    let dateinfo = event.target.value;
    setDate(dateinfo); // Keep the selected date in the state
  }

  function handlclick(url) {
    setPageload(url);
    window.open(url, "_blank");
  }

  useEffect(() => {
    api();
  }, [topics, date]);

  return (
    <div className="Main">
      <div className="select-bar">
        <div className="newslogo size-6">
          <img src={logoNews} alt="logo" className="h-1" />
        </div>

        <select className="select" value={topics} onChange={(e) => setTopic(e.target.value)}>
          <option value="business headlines">Business Headlines</option>
          <option value="TechCrunch">TechCrunch</option>
          <option value="Apple">Apple</option>
          <option value="Tesla">Tesla</option>
        </select>
   
   {topics === "Tesla"  || topics === "Apple" ?  
        <div className="dateFinding ">
          <input
            type="date"
            className="datainput"
            value={date}
            onChange={(event) => datechange(event)}
          />
        </div> : ""  }
      </div>

      {/* Display the selected date */}
      <h3>Selected Date: {date}</h3>

      <div className="container">
        {news.map((article, index) => (
          <div key={index} className="news-item">
            <img
              src={article.urlToImage}
              onClick={() => handlclick(article.url)}
              alt={article.title}
              className="news-image"
            />
            <h2 className="news-title">{article.title}</h2>
            <h3>Published: {new Date(article.publishedAt).toLocaleDateString()}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mortal;
