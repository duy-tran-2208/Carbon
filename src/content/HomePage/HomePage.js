import React from 'react';

import { Button } from 'carbon-components-react';

import curve from '../../images/curve2.png';

import './_home-page.scss';
import About from '../../components/About';
import Service from '../../components/Service';
import Contact from '../../components/Contact/Contact';
import TopHeader from '../../components/TopHeader/TopHeader';

const HomePage = () => {
  return (
    <>
      <TopHeader />

      <div className="banner-container">
        <h1 className="main-header">
          We provide <strong>solutions</strong> for your business!
        </h1>

        <div className="btn-container">
          <Button className="start-btn">Get Started</Button>

          <Button className="bx--btn--secondary service-btn">
            Our Services
          </Button>
        </div>

        <div class="curve">
          <img src={curve} />
        </div>
      </div>

      <About id="about-section" />

      <Service />

      <Contact />
    </>
  );
};

export default HomePage;
