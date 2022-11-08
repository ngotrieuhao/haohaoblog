import Layout from "components/layout/Layout";
import HomeBanner from "module/home/HomeBanner";
import HomeFeature from "module/home/HomeFeature";
import HomeListBackend from "module/home/HomeListBackend";
import HomeListBlockchain from "module/home/HomeListBlockchain";
import HomeListFrontend from "module/home/HomeListFrontend";
import HomeListUiux from "module/home/HomeListUiux";
import HomeNewest from "module/home/HomeNewest";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
        <div className="container flex flex-col md:gap-10 md:flex-row">
          <HomeListFrontend></HomeListFrontend>
          <HomeListBackend></HomeListBackend>
        </div>
        <div className="container flex flex-col md:gap-10 md:flex-row">
          <HomeListBlockchain></HomeListBlockchain>
          <HomeListUiux></HomeListUiux>
        </div>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
