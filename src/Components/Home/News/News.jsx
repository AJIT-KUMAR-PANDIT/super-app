import StyleNews from "./News.module.scss";
import React, { useState, useEffect } from "react";

const keywords = ["bitcoin", "technology", "science", "business", "sports"];

const getRandomKeyword = () => {
  const randomIndex = Math.floor(Math.random() * keywords.length);
  return keywords[randomIndex];
};

const fetchData = async (apiKey, keyword) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`);
  const data = await response.json();
  return data;
};

const News = () => {
  const [newsTitle, setNewsTitle] = useState(null);
  const [newsContent, setNewsContent] = useState(null);
  const [imageUrl,setImageUrl] = useState("../../../assets/images/newsDefault.svg");

  useEffect(() => {
    const apiKey = "2e87219d3f5047b8a54e28a371db3a54";  // Replace with your actual API key
    const randomKeyword = getRandomKeyword();

    const fetchNewsData = async () => {
      try {
        const newsData = await fetchData(apiKey, randomKeyword);
        const [settingNews] = newsData.articles;  // Assuming articles is an array
        setNewsTitle(settingNews?.title || "No title available");
        setNewsContent(settingNews?.description || "No content available");
        setImageUrl(settingNews?.urlToImage || "../../../assets/images/newsDefault.svg");
      } catch (error) {
        console.error("Error fetching news data: ", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <>
      <div>
        <div className={`${StyleNews.image}`} style={{ '--image-url': `url(${imageUrl})` }}>
          <div className={`${StyleNews.heading}`}>
            {newsTitle}
          </div>
        </div>
        <div className={`${StyleNews.news}`}>
          {newsContent}
        </div>
      </div>
    </>
  );
};

export default News;
