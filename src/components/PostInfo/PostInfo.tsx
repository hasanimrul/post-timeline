import React from "react";
import style from "./PostInfo.module.css";

type TimelineDataProps = {
  data?: {
    body?: string;
    comments: Array<{
      body: string;
      email: string;
      id: number;
      name: string;
      postId: number;
    }>;
    id?: string;
    title?: string;

    user?: {
      id: string;
      name: string;
    };
  };
  activeHeadings?: string[];
  toggleComments?: any;
  expandedPostId?: number;
};

const CompaniesInfo: React.FC<TimelineDataProps> = ({
  data,
  activeHeadings,
  toggleComments,
  expandedPostId,
}) => {
  // console.log("data", data);
  return (
    <section
      id={data?.id}
      className={`${style.postsInfoSection} ${
        activeHeadings?.includes(data?.id || "") ? style.middle : ""
      }`}
    >
      <div className={style.flexColumn}>
        <svg
          className={style.topLine}
          width="4"
          height="250"
          viewBox="0 0 4 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H4C4 96.9553 4 151.609 4 247.979C4 249.083 3.10457 250 2 250V250C0.895431 250 0 249.105 0 248V125V0Z"
            fill="url(#paint0_linear_583_100)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_583_100"
              x1="-8"
              y1="-1.28266e-05"
              x2="-13.1097"
              y2="0.826859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AEA9A9" />
              <stop offset="0.388752" stop-color="#C1C1C1" />
              <stop offset="0.873911" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
        <div className={style.imgArrow}>
          <p>{data?.id}</p>
          <svg
            className={style.rightArrow}
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 2L10 7L2.5 12V2Z"
              stroke-width="4"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <svg
          width="4"
          height="400"
          viewBox="0 0 4 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="4"
            height="400"
            rx="2"
            fill="url(#paint0_linear_2661_1561)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2661_1561"
              x1="-8"
              y1="-3.78128e-05"
              x2="-13.2277"
              y2="0.286928"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AEA9A9" />
              <stop offset="0.388752" stop-color="#C1C1C1" />
              <stop offset="0.873911" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div id={data?.id} className={style.companiesInfoContent}>
        <div className={style.infoContent} id={data?.title}>
          <h1>{data?.title}</h1>
          <p>{data?.body}</p>
        </div>
        <div className={style.userInfo}>
          <p className={style.user}>By-</p>
          <h3>{data?.user?.name}</h3>
        </div>
        <div className={style.commentsWrapper}>
          <button
            onClick={() => toggleComments(data?.id)}
            className={style.commentBtn}
          >
            {expandedPostId === data?.id ? "Hide Comments" : "Show Comments"}
          </button>

          {expandedPostId == data?.id && (
            <div className={style.comments}>
              {data?.comments.map((comment) => (
                <div key={comment?.id} className={style.comment}>
                  <h5>Comment No. {comment?.id}</h5>
                  <h3>Name: {comment.name}</h3>
                  <span> {comment.body}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompaniesInfo;
