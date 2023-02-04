import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="How GrowthCap works" text="To increase the number of successful startups in the world." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Register" text="Sign up to create a pitch and put your business in front of potential investors." />
      <Feature title="Connect with Investors" text="Connect with & message interested investors. We have 200k+ active investors globally." />
      <Feature title="Get funded" text="Over $400 millions raised for our members to date." />
    </div>
  </div>
);

export default WhatGPT3;
