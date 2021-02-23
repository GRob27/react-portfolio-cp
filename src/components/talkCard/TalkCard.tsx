import React, { FunctionComponent } from "react";
import "./TalkCard.css";

type TalkCardProps = {
  talkDetails: {
    isDark: boolean;
    title: string;
    subtitle: string;
    event_url: string;
    slides_url: string;
    image: string;
  };
};

const TalkCard: FunctionComponent<TalkCardProps> = ({ talkDetails }) => {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkCard;
