import { db } from "firebase-app/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import PostMeta from "module/post/PostMeta";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import slugify from "slugify";

const AuthorBox = ({ userId = "" }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchUserData() {
      const docRef = doc(db, "users", userId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        setUser(docSnapshot.data());
      }
    }
    fetchUserData();
  }, [userId]);
  if (!userId || !user?.username) return null;
  return (
    <div className="author ">
      <div className="author-image">
        <img src={user?.avatar} alt="" />
      </div>
      <div className="author-content">
        {/* <h3 className="author-name">{user?.fullname}</h3> */}
        <PostMeta
          to={slugify(user?.fullname || "", { lower: true })}
          authorName={user?.fullname}
          date=""
        ></PostMeta>
        <p className="author-desc">{user?.description}</p>
      </div>
    </div>
  );
};

export default AuthorBox;
