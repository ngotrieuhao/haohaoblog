import { db } from "firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import PostBannerItem from "module/post/PostBannerItem";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

const HomeBanner = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(10)
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
  return (
    <>
      <Swiper
        className="mb-10"
        grabCursor="true"
        slidesPerView={"auto"}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        // autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} className="pb-10">
            <PostBannerItem data={post}></PostBannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeBanner;
