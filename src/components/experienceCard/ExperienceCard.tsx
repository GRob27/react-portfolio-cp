import React, { useState, createRef, FunctionComponent } from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";

type ExperienceCardProps = {
  cardInfo: any;
  isDark: boolean;
};

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  cardInfo,
  isDark,
}) => {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef<HTMLImageElement>();

  const getColorArrays = () => {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  };

  const rgb = (values: any) => {
    return typeof values === "undefined"
      ? ""
      : "rgb(" + values.join(", ") + ")";
  };

  const GetDescBullets = ({ descBullets, isDark }: any) => {
    return descBullets
      ? descBullets.map((item: React.ReactNode, i: string | number | null | undefined) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{ background: rgb(colorArrays) }}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
