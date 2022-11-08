import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const PostImageBannerStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const PostImageBanner = ({ className = "", url = "", alt = "", to = "" }) => {
  if (to)
    return (
      <Link to={`/${to}`}>
        <PostImageBannerStyles className={`post-image ${className}`}>
          <img src={url} alt={alt} loading="lazy" />
        </PostImageBannerStyles>
      </Link>
    );
  return (
    <PostImageBannerStyles className={`post-image ${className}`}>
      <img src={url} alt={alt} loading="lazy" />
    </PostImageBannerStyles>
  );
};

export default PostImageBanner;
