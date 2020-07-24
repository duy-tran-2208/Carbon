import React from 'react';

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

import { Button } from 'carbon-components-react';

import './_top-header.scss';

const TopHeader = () => {
  return (
    <Header aria-label="Carbon Tutorial">
      <HeaderName href="/" prefix="" className="header-name">
        Carbon Demo
      </HeaderName>

      <HeaderNavigation aria-label="Navigation" align="end">
        <HeaderMenuItem href="/home">Home</HeaderMenuItem>
        <HeaderMenuItem href="/about">About</HeaderMenuItem>
        <HeaderMenuItem href="/service">Services</HeaderMenuItem>
        <HeaderMenuItem href="/contact">Contact</HeaderMenuItem>
      </HeaderNavigation>
    </Header>
  );
};

const asd = () => (
  <Header aria-label="Top Header" align="end">
    <SkipToContent />

    <HeaderName href="/" prefix="" className="header-name">
      Carbon Demo
    </HeaderName>

    <HeaderNavigation aria-label="Home" align="end">
      <HeaderMenuItem href="/home">Home</HeaderMenuItem>
    </HeaderNavigation>

    <HeaderNavigation aria-label="About" align="end">
      <HeaderMenuItem href="/about">About</HeaderMenuItem>
    </HeaderNavigation>

    <HeaderNavigation aria-label="Service" align="end">
      <HeaderMenuItem href="/service">Services</HeaderMenuItem>
    </HeaderNavigation>

    <HeaderNavigation aria-label="Contact" align="end">
      <HeaderMenuItem href="/contact">Contact</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar />
  </Header>
);

export default TopHeader;
