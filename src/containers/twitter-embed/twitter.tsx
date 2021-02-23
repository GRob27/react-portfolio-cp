import React, { Suspense, useContext } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import Loading from "../loading/Loading";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

import "./twitter.css";

const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";
var widthScreen = window.screen.width;

const Twitter = () => {
  const { isDark } = useContext(StyleContext);

  const timeOut = () => {
    const twitter = document.getElementById("twitter");
    if (!twitter) return;
    setTimeout(() => {
      if (!twitter.innerHTML.includes("iframe")) {
        twitter.innerHTML = cantDisplayError;
      }
    }, 10000);
  };

  const renderLoader = () => <Loading />;

  if (!twitterDetails.display) return null;
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{ height: 400, width: { widthScreen } }}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
              onload={timeOut()}
            />
          </div>
        </div>
      </Suspense>
    );
  }
  return null;
};

export default Twitter;
