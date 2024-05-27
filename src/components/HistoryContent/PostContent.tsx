import { time } from "console";
import React, { useEffect, useState } from "react";

import timelineData from "../../data/history/timelineData.json";
import CompaniesInfo from "../PostInfo/PostInfo";
import style from "./PostContent.module.css";

const HistoryContent = () => {
  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const middle = window.innerHeight / 2;
  //     const newActiveHeadings = timelineData
  //       .filter(({ id }) => {
  //         const element = document.getElementById(id);
  //         if (element) {
  //           const rect = element.getBoundingClientRect();
  //           return rect.top <= middle && rect.bottom >= middle;
  //         }
  //         return false;
  //       })
  //       .map(({ id }) => id);
  //     setActiveHeadings(newActiveHeadings);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    var target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={style.historyContentSection}>
      <ul className={`${style.timelineYear}`}>
        {timelineData.map((year, i) => {
          const isActive = activeHeadings[0] === year?.id;
          return (
            <li key={i}>
              <a
                href={`#${year.title}`}
                className={`${isActive ? style.active : ""}`}
                onClick={(e) => onPress(e)}
              >
                {year.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className={style.timelineWrapper}>
        <svg
          className={style.circleIconTop}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="6.5" stroke="#fff" strokeWidth="3" />
        </svg>
        {timelineData?.map((data, i) => (
          <CompaniesInfo
            key={i}
            id={data.title}
            data={data}
            activeHeadings={activeHeadings}
          />
        ))}
        <svg
          className={style.circleIconBottom}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="6.5" stroke="#fff" strokeWidth="3" />
        </svg>
      </div>
    </section>
  );
};

export default HistoryContent;
