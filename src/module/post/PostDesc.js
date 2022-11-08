import React from "react";
import styled, { css } from "styled-components";
const PostDescStyles = styled.div`
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.25px;
  a {
    display: block;
  }
  ${(props) =>
    props.size === "smaller" &&
    css`
      font-size: 12px;
      @media screen and (max-width: 1023.98px) {
        font-size: 16px;
      }
    `};
  ${(props) =>
    props.size === "small" &&
    css`
      color: #7f868c;

      font-size: 14px;
      @media screen and (max-width: 1023.98px) {
        font-size: 12px;
      }
    `};
  ${(props) =>
    props.size === "normal" &&
    css`
      font-size: 16px;
      @media screen and (max-width: 1023.98px) {
        font-size: 12px;
      }
    `};

  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 20px;
      @media screen and (max-width: 1023.98px) {
        font-size: 12px;
      }
    `};
`;

const PostDesc = ({ children, className = "", size = "normal", to = "" }) => {
  return (
    <PostDescStyles size={size} className={` ${className}`}>
      {children}
    </PostDescStyles>
  );
};

export default PostDesc;
