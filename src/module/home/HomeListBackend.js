import Heading from "components/layout/Heading";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import PostBackendItem from "module/post/PostBackendItem";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const HomeListBackendStyles = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 40px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: ${(props) => props.theme.bluethin};
    border-radius: 16px;
  }
  @media screen and (max-width: 1023.98px) {
    .layout {
      grid-template-columns: 100%;
    }
    .sidebar {
      padding: 14px 10px;
    }
  }
`;

const HomeListBackend = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("category.slug", "==", "backend-developer"),
      where("status", "==", 1),
      where("hot", "==", false),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  if (posts.length <= 0) return null;
  const [...other] = posts;
  return (
    <HomeListBackendStyles className="home-block">
      {/* <div className="w-full container-left">
        <Heading>Front-End posts</Heading>
        <div>
          <div className="sidebar">
            {other.length > 0 &&
              other.map((item) => (
                <PostFrontendItem key={v4()} data={item}></PostFrontendItem>
              ))}
          </div>
        </div>
      </div> */}
      <div className="w-full container-right">
        <Heading>Backend posts</Heading>
        <div>
          <div className="sidebar">
            {other.length > 0 &&
              other.map((item) => (
                <PostBackendItem key={v4()} data={item}></PostBackendItem>
              ))}
          </div>
        </div>
      </div>
    </HomeListBackendStyles>
  );
};

export default HomeListBackend;
