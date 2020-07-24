import React from 'react';

import { Devices32 } from '@carbon/icons-react';
import { Analytics32 } from '@carbon/icons-react';
import { Settings32 } from '@carbon/icons-react';

import './_service.scss';

const Card = ({ icon, header, desc }) => (
  <div className="card">
    {icon}
    <h3 className="card-header">{header}</h3>
    <p className="desc">{desc}</p>
  </div>
);

const Service = () => {
  return (
    <div className="service-container">
      <h2 className="header">Our Services</h2>

      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-md-4  bx--col-lg-4">
            <Card
              icon={<Devices32 />}
              header={`Web Design & Development`}
              desc={`All of our sites are built from scratch to fit each client’s unique wants and needs. Your site will work perfectly on desktop, tablet and mobile, so customers will always have the best possible experience on every device.`}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4  bx--col-lg-4">
            <Card
              icon={<Analytics32 />}
              header={`Online Marketing & Advertising`}
              desc={`Our team of proven industry experts will maximize your online presence and increase your digital income using our unique proven solutions. We take the time to get to know your goals and your target market, ensuring that not a single dollar goes to waste.`}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--offset-md-2 bx--col-lg-4 bx--offset-lg-0">
            <Card
              icon={<Settings32 />}
              header={`Online Reputation Management`}
              desc={`Your online reputation is your businesses most valuable asset. A single negative review can drastically alter your businesses public perception. Organic Business Solutions can help your company build a robust and positive online reputation.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const asd = () => (
  <div className="bx--grid bx--grid--full-width">
    <div className="bx--row">
      <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">{/* ... */}</div>

      <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">{/* ... */}</div>

      <div
        className="bx--col-sm-4 bx--col-md-4 bx--offset-md-2 
                      bx--col-lg-4 bx--offset-lg-0">
        {/* ... */}
      </div>
    </div>
  </div>
);

export default Service;
