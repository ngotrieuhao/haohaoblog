import Heading from "components/layout/Heading";
import Layout from "components/layout/Layout";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import PostItem from "module/post/PostItem";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UserPost = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const docRef = query(
        collection(db, "posts"),
        where("user.username", "==", params.username)
      );
      onSnapshot(docRef, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(results);
      });
    }
    fetchData();
  }, [params.username]);
  if (posts.length <= 0) return null;
  return (
    <Layout>
      <div className="container">
        <div className="pt-6"></div>
        <Heading>
          Posts by{" "}
          <span
            style={{
              color: "#1DC071",
            }}
          >
            {params?.username}
          </span>
        </Heading>
        <div className="mb-10 grid-layout grid-layout--primary">
          {posts.map((post) => (
            <PostItem key={post.id} data={post}></PostItem>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default UserPost;
