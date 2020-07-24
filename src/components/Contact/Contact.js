import React from 'react';

import { LogoFacebook32 } from '@carbon/icons-react';
import { LogoInstagram32 } from '@carbon/icons-react';
import { LogoTwitter32 } from '@carbon/icons-react';
import { LogoLinkedin32 } from '@carbon/icons-react';

import {
  Button,
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Select,
  SelectItem,
} from 'carbon-components-react';

import './_contact.scss';

const ContactForm = () => (
  <Form>
    <FormGroup id="input">
      <TextInput
        invalidText="Invalid error message."
        labelText="Name"
        placeholder="Jesse Pinkman"
      />

      <TextInput
        id="test3"
        invalidText="Invalid error message."
        labelText="Email"
        placeholder="jessepinkman@gmail.com"
      />
    </FormGroup>

    <FormGroup id="text-area">
      <TextArea
        id="message"
        invalidText="Invalid error message."
        labelText="Message"
        placeholder="My message goes here ..."
        rows={4}
      />
    </FormGroup>

    <FormGroup>
      <Select
        defaultValue="us"
        id="select-1"
        invalidText="This is an invalid error message."
        labelText="Country">
        <SelectItem text="United States" value="us" />
        <SelectItem text="Viet Nam" value="vn" />
      </Select>
    </FormGroup>

    <Button kind="primary" id="submit-btn" tabIndex={0} type="submit">
      Submit
    </Button>
  </Form>
);

const Contact = () => (
  <div className="contact-container">
    <div className="bg">
      <div className="overlay"></div>
    </div>

    <div className="content">
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col-sm-2 bx--col-md-4  bx--col-lg-5">
            <div className="left">
              <h2 className="header">Contact Us</h2>

              <div className="info">
                <p className="phone">Phone: 123-456-789</p>

                <p className="email">Email: carbondemo@gmail.com</p>

                <p className="question">
                  Have a question? We’re here to help. Send us a message and
                  we’ll be in touch.
                </p>

                <div className="icon">
                  <LogoFacebook32 className="facebook" />
                  <LogoLinkedin32 className="linkedin" />
                  <LogoInstagram32 className="instagram" />
                  <LogoTwitter32 className="twitter" />
                </div>
              </div>
            </div>
          </div>
          <div className="bx--col-sm-2 bx--col-md-4  bx--col-lg-7">
            <div className="form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
