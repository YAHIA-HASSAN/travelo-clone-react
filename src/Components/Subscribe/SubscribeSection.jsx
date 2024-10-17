import React, { useState } from 'react';
import "./SubscribeSection.css"; 

const Subscribe = () => {
  return (
    <div className="Subscribe-container">
      <h2>Subscribe Our Newsletter</h2>
      <p>
        Subscribe newsletter to get offers and about new places to discover.
      </p>
      <div id='Subscribe-input-data'>
        <input placeholder="Your mail" type="email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
