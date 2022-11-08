import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const ListPostItemStyles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 280px;
      height: 200px;
      border-radius: 12px;
    }
    &-category {
      margin-bottom: 8px;
      background-color: ${(props) => props.theme.bgCategory};
    }
    &-content {
      flex: 1;
    }

    &-title {
      margin-bottom: 8px;
      font-size: 26px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    margin-bottom: 14px;
    padding-bottom: 14px;
    .post {
      &-image {
        width: 140px;
        height: 130px;
        img {
          object-fit: fill;
        }
      }
      &-title {
        font-size: 16px;
      }
    }
  }
`;
const ListPostItem = ({ data }) => {
  if (!data.id) return null;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <ListPostItemStyles>
      <PostImage
        url={data?.image}
        alt=""
        to={data?.slug}
        className=""
      ></PostImage>

      <div className="post-content">
        <PostCategory type="secondary" to={data?.category?.slug}>
          {data?.category?.name}
        </PostCategory>
        <PostTitle className="postlist--title h-9" to={data?.slug}>
          {data?.title}
        </PostTitle>
        <PostMeta
          to={data.user?.username}
          authorName={data.user?.fullname}
          date={formatDate}
        ></PostMeta>
      </div>
    </ListPostItemStyles>
  );
};

export default ListPostItem;
