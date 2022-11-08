import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarMobile from "./SidebarMobile";
const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 600;
    img {
      max-width: 40px;
    }
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .nav_input:checked ~ .nav__overlay {
    display: block;
  }
  .nav_input:checked ~ .sidebar_mobile {
    transform: translateX(0);
  }
  .nav__overlay {
    inset: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 98;
    display: none;
    animation: fadeIn linear 0.2s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1023.98px) {
    .nav_bars-btn {
      display: flex;
      align-items: center;
    }
  }
`;

const DashboardHeader = () => {
  const { userInfo } = useAuth();
  return (
    <DashboardHeaderStyles>
      <NavLink to="/" className="logo">
        <img
          srcSet="/haohaologo.png 2x"
          alt="haohao-blogging"
          className="logo"
        />
        <span className="hidden lg:inline-block">HaoHao Blogging</span>
      </NavLink>
      <div className="header-right">
        <Button to="/manage/add-post" className="header-button" height="52px">
          Write new post
        </Button>
        <Link to="/profile" className="header-avatar">
          <img src={userInfo?.avatar} alt="" />
        </Link>
      </div>
      <label htmlFor="nav-mobile-input" className="hidden nav_bars-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </label>
      <input
        type="checkbox"
        name=""
        className="hidden nav_input"
        id="nav-mobile-input"
      />
      <label htmlFor="nav-mobile-input" className="nav__overlay"></label>
      <SidebarMobile className="sidebar_mobile"></SidebarMobile>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
