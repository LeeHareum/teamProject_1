// Main.jsx
import React, { useState, useEffect } from "react";
import { getTopStories } from "../../api/rssFeedAPI";
import Header from "../../components/header";

const Main = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getTopStories("home")
      .then((response) => {
        setStories(response.data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch top stories: ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Top Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.url}>
            {/* 가정: story.multimedia[0].url에 이미지가 저장된 위치라고 가정 */}
            {story.multimedia && story.multimedia.length > 0 && (
              <img
                className="story-image"
                src={story.multimedia[0].url}
                alt={story.title}
              />
            )}
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
