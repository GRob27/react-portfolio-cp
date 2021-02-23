import React from "react";

import "./Top.css";

const Top = () => {
  const TopEvent = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  // When the user scrolls down 20px from the top of the document, show the button
  const scrollFunction = () => {
    const topButton = document.getElementById("topButton");
    if (!topButton) return;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.visibility = "visible";
    } else {
      topButton.style.visibility = "hidden";
    }
  };

  window.onscroll = () => {
    scrollFunction();
  };

  window.onload = () => {
    scrollFunction();
  };

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
};

export default Top;
