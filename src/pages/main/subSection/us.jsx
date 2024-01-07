import React, { useState, useEffect } from "react";
import { getTopStories } from "../../../api/topStoriesAPI";
import Header from "../../../components/header";

const Us = () => {
  const [allStories, setAllStories] = useState([]);
  const [firstDivStories, setFirstDivStories] = useState([]);
  const [secondDivStories, setSecondDivStories] = useState([]);
  const [activeTab, setActiveTab] = useState("firstTab");

  useEffect(() => {
    getTopStories("us")
      .then((response) => {
        const allData = response.data.results;
        setAllStories(allData);

        const firstDivCount = 5;
        const firstDivData = allData.slice(0, firstDivCount);
        setFirstDivStories(firstDivData);

        const secondDivData = allData.slice(firstDivCount);
        setSecondDivStories(secondDivData);
      })
      .catch((error) => {
        console.error("Failed to fetch top stories: ", error);
      });
  }, []);

  const [hoveredLinks, setHoveredLinks] = useState({
    link1: false,
    link2: false,
    link3: false,
  });

  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
    cursor: "pointer",
  };

  return (
    <div>
      <Header />
      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "black",
          borderBottom: "1px solid #d6d8db",
          margin: "0 20px",
          paddingBottom: "5px",
          fontFamily: "'WarhavenB', sans-serif",
        }}
      >
        U.S. News
      </div>
      <div
        style={{
          margin: "0 20px 0 20px",
          fontSize: "11px",
          borderBottom: "thick double",
          marginTop: "8px",
          paddingBottom: "8px",
        }}
      >
        <span>
          <a
            href="https://www.nytimes.com/interactive/2022/us/fire-tracker-maps.html"
            style={
              hoveredLinks.link1
                ? { ...linkStyle, ...linkHoverStyle }
                : linkStyle
            }
            onMouseOver={() =>
              setHoveredLinks({
                link1: true,
                link2: false,
                link3: false,
              })
            }
            onMouseOut={() =>
              setHoveredLinks({
                link1: false,
                link2: false,
                link3: false,
              })
            }
          >
            Wildfire and Air Quality Tracker
          </a>{" "}
          {"|"}
        </span>
        <span>
          {" "}
          <a
            href="https://www.nytimes.com/column/california-today"
            style={
              hoveredLinks.link2
                ? { ...linkStyle, ...linkHoverStyle }
                : linkStyle
            }
            onMouseOver={() =>
              setHoveredLinks({
                link1: false,
                link2: true,
                link3: false,
              })
            }
            onMouseOut={() =>
              setHoveredLinks({
                link1: false,
                link2: false,
                link3: false,
              })
            }
          >
            California Today
          </a>{" "}
          {"|"}
        </span>
        <span>
          {" "}
          <a
            href="https://www.nytimes.com/spotlight/race"
            style={
              hoveredLinks.link3
                ? { ...linkStyle, ...linkHoverStyle }
                : linkStyle
            }
            onMouseOver={() =>
              setHoveredLinks({
                link1: false,
                link2: false,
                link3: true,
              })
            }
            onMouseOut={() =>
              setHoveredLinks({
                link1: false,
                link2: false,
                link3: false,
              })
            }
          >
            Race/Related
          </a>
        </span>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: "3",
            marginTop: "20px",
            borderRight: "1px solid #ccc5c5",
            paddingRight: "60px",
          }}
        >
          <ul>
            {firstDivStories.map((story) => (
              <li
                key={story.url}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{ width: "100%" }}
                  />
                )}
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "20px",
                    width: "100%",
                    fontFamily: "'WarhavenB', sans-serif",
                  }}
                >
                  {story.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 2, marginLeft: "20px" }}>
          <ul>
            {secondDivStories.map((story) => (
              <li
                key={story.url}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  borderBottom: "1px solid #ccc5c5",
                  paddingBottom: "7px",
                }}
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    flex: 1,
                    fontFamily: "'WarhavenB', sans-serif",
                  }}
                >
                  {story.title}
                </a>
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{
                      width: "30%",
                      display: "block",
                      paddingBottom: "20px",
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "20px" }}>
        <div
          onClick={() => setActiveTab("firstTab")}
          style={{
            background: "white",
            color: activeTab === "firstTab" ? "black" : "#b4aeae",
            padding: "20px",
            borderRadius: "1px",
            cursor: "pointer",
            borderTop: activeTab === "secondTab" ? "none" : "2px solid black",
            backgroundColor: activeTab === "secondTab" ? "white" : "#f5eded",
          }}
        >
          <p>Latest</p>
        </div>
        <div
          onClick={() => setActiveTab("secondTab")}
          style={{
            background: "white",
            color: activeTab === "firstTab" ? "#b4aeae" : "black",
            padding: "20px",
            borderRadius: "1px",
            cursor: "pointer",
            borderTop: activeTab === "secondTab" ? "2px solid black" : "none",
            backgroundColor: activeTab === "secondTab" ? "#f5eded" : "white",
          }}
        >
          <p>Search</p>
        </div>
      </div>

      <div>
        {activeTab === "firstTab" && (
          <div>
            {/* API에서 받아온 데이터를 이용하여 화면에 표시합니다. */}
            {firstDivStories.map((story) => (
              <div
                key={story.url}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: activeTab === "firstTab" ? "#f5eded" : "white",
                }}
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    fontFamily: "'WarhavenB', sans-serif",
                  }}
                >
                  {story.title}
                </a>
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{
                      width: "30%",
                      display: "block",
                      paddingBottom: "20px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === "secondTab" && (
          <div>
            {/* API에서 받아온 데이터를 이용하여 화면에 표시합니다. */}
            {secondDivStories.map((story) => (
              <div
                key={story.url}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: activeTab === "firstTab" ? "white" : "#f5eded",
                }}
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    fontFamily: "'WarhavenB', sans-serif",
                    marginRight: "10px",
                  }}
                >
                  {story.title}
                </a>
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{
                      width: "30%",
                      display: "block",
                      paddingBottom: "20px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Us;
