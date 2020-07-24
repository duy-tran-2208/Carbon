import React from 'react';

import group from '../../images/group.jpg';
import {
  Checkbox,
  DatePicker,
  DatePickerInput,
  Dropdown,
} from 'carbon-components-react';

import './_about.scss';

const About = () => (
  <div className="about-container">
    <h2 className="header">About Us</h2>
    <p className="desc">
      We specialize in helping our clients grow their business as efficiently as
      possible. Our services include web design & development, online marketing
      & advertising, and reputation management.
    </p>
    <div className="img-container"></div>
  </div>
);

export default About;
