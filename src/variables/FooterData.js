import React from "react";
import { siteLink } from "./SitesData";
import { navigationLink } from "./NavigationLink";
import { socialLink } from "./SocialLink";
import styled from "styled-components";

const FooterWidgetTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FooterWidgetList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const FooterWidgetListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterWidgetLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    color: #f8f9fa;
  }
`;

const FooterWidget = ({ title, children }) => {
  return (
    <div className="col-12 col-md-3 mb-3">
      <FooterWidgetTitle>{title}</FooterWidgetTitle>
      <FooterWidgetList>{children}</FooterWidgetList>
    </div>
  );
};

const FooterWidget1 = () => {
  return (
    <FooterWidget title="Link">
      {siteLink.map((data) => (
        <FooterWidgetListItem key={data.title}>
          <FooterWidgetLink href={data.url}>{data.title}</FooterWidgetLink>
        </FooterWidgetListItem>
      ))}
    </FooterWidget>
  );
};

const FooterWidget2 = () => {
  return (
    <FooterWidget title="Kategori">
      {navigationLink.map((data) => (
        <FooterWidgetListItem key={data.title}>
          <FooterWidgetLink href={data.url}>{data.title}</FooterWidgetLink>
        </FooterWidgetListItem>
      ))}
    </FooterWidget>
  );
};

const FooterWidget3 = () => {
  return (
    <div className="row">
      {socialLink.map((linkData) => (
        <div className="col">
          <a href={linkData.url}>
            <h2 className="text-white social-icon">{linkData.icon}</h2>
          </a>
        </div>
      ))}
    </div>
  );
};

export const FooterData = [
  {
    title: "Tentang",
    item: <FooterWidget1 />,
  },
  {
    title: "Link",
    item: <FooterWidget2 />,
  },
  {
    title: "Kategories",
    item: <FooterWidget3 />,
  },
];
