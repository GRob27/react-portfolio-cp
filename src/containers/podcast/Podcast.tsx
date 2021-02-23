import React, { useContext } from "react";
import { Fade } from "react-reveal";

import { podcastSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

import "./Podcast.css";

const Podcast = () => {
  const { isDark } = useContext(StyleContext);
  if (!podcastSection.display) return null;
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, i) => {
            return (
              <div key={i}>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title={`podcast-${i}`}
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default Podcast;
