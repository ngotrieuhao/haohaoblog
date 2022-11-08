import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  .container__footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #313131;
    padding-block: 20px;
    color: #fff;
  }
  .footer-main--right {
    display: flex;
    column-gap: 5px;

    img {
      width: 30px;
    }
  }
  /* Mobile */
  @media screen and (max-width: 1023.98px) {
    .container__footer {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="container__footer">
        <div className="text-sm footer-main--left">
          @2022 - HaoHao Blog. All Right Reserved
        </div>
        <div className="text-sm footer-main--right">
          Made with <img src="/heart.gif" alt="heart.gif" /> in HCM City
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
