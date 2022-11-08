import styled from "styled-components";
import slugify from "slugify";
import React from "react";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import PostCategory from "./PostCategory";
import PostImageBanner from "./PostImageBanner";
import PostDesc from "./PostDesc";
import parse from "html-react-parser";

// import Swiper and modules styles

const PostBannerItemStyles = styled.div`
  /* margin-top: 4rem; */
  width: 400px;
  border-radius: 16px;
  position: relative;
  height: 200px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background-color: rgba(0, 0, 0, 0.75);
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    width: 100%;
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;
const PostBannerItem = ({ data }) => {
  if (!data || !data.id) return null;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = data;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-start gap-7 w-full max-w-[1260px] my-auto mx-auto px-5">
        <PostBannerItemStyles>
          <PostImageBanner
            to={data.slug}
            url={data.image}
            className="flex-1 w-full cursor-pointer"
            alt="unsplash"
          ></PostImageBanner>
        </PostBannerItemStyles>
        <div className="flex flex-col gap-4 post-content max-w-[700px]">
          <div className="flex flex-col gap-4 post-top">
            {category?.name && (
              <PostCategory to={category.slug}>{category.name}</PostCategory>
            )}
            <PostTitle to={data.slug} size="biggest">
              {data.title}
            </PostTitle>
            <PostDesc className="post-description" size="small">
              {parse(data.content || "")}
            </PostDesc>
            <PostMeta
              to={slugify(user?.fullname || "", { lower: true })}
              authorName={user?.fullname}
              date={formatDate}
            ></PostMeta>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBannerItem;
