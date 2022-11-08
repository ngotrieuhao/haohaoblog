import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
];

const HeaderStyles = styled.header`
  padding: 20px 0;
  margin-bottom: 4rem;
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-auth {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo {
    display: block;
    max-width: 50px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
    font-weight: 500;
  }
  .search {
    margin-left: auto;
    padding: 15px 25px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
  }
  .search-input {
    flex: 1;
    padding-right: 45px;
    font-weight: 500;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
  }
  @media screen and (max-width: 1023.98px) {
    .logo {
      max-width: 30px;
    }
    .menu {
      margin-left: 10px;
      font-size: 12px;
    }
    .header-auth {
      font-size: 12px;
      gap: 4px;
      a {
        button {
          font-size: 12px;
          padding-inline: 8px;
          height: 35px;
        }
      }
    }
  }
`;
const Header = () => {
  const { userInfo } = useAuth();
  function getLastName(name) {
    if (!name) return "User";
    const length = name.split(" ").length;
    return name.split(" ")[length - 1];
  }
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <div className="flex">
            <NavLink to="/">
              <img
                srcSet="/haohaologo.png 2x"
                alt="haohao-blogging"
                className="logo"
              />
            </NavLink>
            <ul className="menu">
              {menuLinks.map((item) => (
                <li className="menu-item" key={item.title}>
                  <NavLink to={item.url} className="menu-link">
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {!userInfo ? (
            <Button
              type="button"
              height="56px"
              className="header-button"
              to="/sign-in"
            >
              Login
            </Button>
          ) : (
            <div className="header-auth">
              <div>
                <span>Welcome, </span>
                <strong>{getLastName(userInfo?.fullname)}</strong>
              </div>
              <Button
                type="button"
                height="56px"
                className="header-button"
                to="/dashboard"
              >
                Dashboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
