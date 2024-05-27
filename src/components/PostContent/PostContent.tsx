import React, { useEffect, useState } from "react";

import timelineData from "../../data/history/timelineData.json";
import CompaniesInfo from "../PostInfo/PostInfo";
import style from "./PostContent.module.css";
import { fetchPosts, fetchUsers } from "../../../public/utils/api";

const HistoryContent = () => {
  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  console.log("posts", posts);

  useEffect(() => {
    const getData = async () => {
      const postsData = await fetchPosts();
      const usersData = await fetchUsers();

      // Map users by ID for quick lookup
      const usersMap = usersData.reduce((data, user) => {
        data[user.id] = user;
        return data;
      }, {});

      // Combine posts with user data
      const combinedData = postsData.map((post) => ({
        ...post,
        user: usersMap[post.userId],
      }));

      // Sort posts by ID in descending order
      combinedData.sort((a, b) => b.id - a.id);

      setPosts(combinedData);
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;
      const newActiveHeadings = posts
        .filter(({ id }) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= middle && rect.bottom >= middle;
          }
          return false;
        })
        .map(({ id }) => id);
      setActiveHeadings(newActiveHeadings);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        {posts.map((post, i) => {
          const isActive = activeHeadings[0] == post?.id;
          return (
            <li key={i}>
              <a
                href={`#${post.id}`}
                className={`${isActive ? style.active : ""}`}
                onClick={(e) => onPress(e)}
              >
                {post.id}
              </a>
            </li>
          );
        })}
      </ul>

      <div className={style.timelineWrapper}>
        {posts?.map((data, i) => (
          <CompaniesInfo
            key={i}
            id={data.id}
            data={data}
            activeHeadings={activeHeadings}
          />
        ))}
      </div>
    </section>
  );
};

export default HistoryContent;
