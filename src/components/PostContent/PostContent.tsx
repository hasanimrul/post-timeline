import React, { useEffect, useState } from "react";
import PostInfo from "../PostInfo/PostInfo";
import style from "./PostContent.module.css";
import {
  fetchPosts,
  fetchUsers,
  fetchComments,
} from "../../../public/utils/api";

const HistoryContent = () => {
  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);

  // console.log("posts", posts);

  useEffect(() => {
    const getData = async () => {
      const [postsData, usersData, commentsData] = await Promise.all([
        fetchPosts(),
        fetchUsers(),
        fetchComments(),
      ]);

      // Map users and comments by ID for quick lookup
      const usersMap = usersData.reduce((data, user) => {
        data[user.id] = user;
        return data;
      }, {});

      const commentsMap = commentsData.reduce((data, comment) => {
        if (!data[comment.postId]) {
          data[comment.postId] = [];
        }
        data[comment.postId].push(comment);
        return data;
      }, {});

      // Combine posts with user and comments data
      const combinedData = postsData.map((post) => ({
        ...post,
        user: usersMap[post.userId],
        comments: commentsMap[post.id] || [],
      }));

      // Sort posts by ID in descending order
      combinedData.sort((a, b) => b.id - a.id);

      setPosts(combinedData);
    };

    getData();
  }, []);

  const toggleComments = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

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
    <section className={style.postContentSection}>
      <div className={style.timelineIdWrap}>
        <ul className={style.timelineId}>
          <p className={style.headline}>
            Click the post ID below to see the details :-
          </p>
          {posts.map((post, i) => {
            const isActive = activeHeadings[0] === post?.id;
            return (
              <li key={i}>
                <a
                  href={`#${post?.id}`}
                  className={`${isActive ? style.active : ""}`}
                  onClick={(e) => onPress(e)}
                >
                  {post?.id}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={style.timelineWrapper}>
        {posts?.map((data, i) => (
          <PostInfo
            key={i}
            id={data?.id}
            data={data}
            activeHeadings={activeHeadings}
            toggleComments={toggleComments}
            expandedPostId={expandedPostId}
          />
        ))}
      </div>
    </section>
  );
};

export default HistoryContent;
