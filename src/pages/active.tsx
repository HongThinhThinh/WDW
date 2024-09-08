import { AppProps } from "next/app";
import React, { Component, FC } from "react";
import "../styles/globals.scss";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import Carousel from "@/components/organisms/Carousel";
import ScrollSpy from "react-ui-scrollspy";
import PageTemplate from "@/components/templates/page-template";
import ActivitiesArea from "@/components/organisms/activitesArea";
const test = () => {
  return (
    <>
      <PageTemplate background="/bgactive.svg">
        <Groupcheckbox></Groupcheckbox>
        <ScrollSpy scrollThrottle={50} offsetTop={50} offsetBottom={50}>
          <Carousel>Các Hoạt động của triguda</Carousel>
          <div id="page2">
            <ActivitiesArea></ActivitiesArea>
          </div>
        </ScrollSpy>
      </PageTemplate>
    </>
  );
};
export default test;
