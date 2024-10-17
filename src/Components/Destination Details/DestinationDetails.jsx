import React from "react";
import "./DestinationDetails.css"; // Make sure to copy your CSS to this file

const DestinationDetails = () => {
  return (
    <div>
      <div className="container">
        <div className="section">
          <h2>Description</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p>
            Various versions of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised words.
          </p>
          <p>
            <strong>Day-01</strong>
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <p>
            <strong>Day-02</strong>
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <p>
            <strong>Day-03</strong>
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>
        <br />
        <hr />
        <br />
        <div className="section">
          <h2>Contact for join</h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <input placeholder="Your Name" type="text" />
              </div>
              <div className="form-group">
                <input placeholder="Phone no." type="text" />
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="newsletter">
        <h2>Subscribe Our Newsletter</h2>
        <p>
          Subscribe newsletter to get offers and about new places to discover.
        </p>
        <div>
          <input placeholder="Your mail" type="email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="places">
        <h2>More Places</h2>
        <div className="place">
        <img
  alt="California"
  height="400"
  src="images/california-a.jpg"
  width="600"
/>
          <div className="details">
            <div className="price">$500</div>
            <div className="duration">5 Days</div>
            <h3>California</h3>
            <p>United States of America</p>
            <div className="reviews">
              <i className="fas fa-star"></i> 4.5 (25 Reviews)
            </div>
          </div>
        </div>
        <div className="place">
        <img
  alt="Korola Megna"
  height="400"
  src="images/Korola-Megna.jpg"
  width="600"
/>
          <div className="details">
            <div className="price">$500</div>
            <div className="duration">5 Days</div>
            <h3>Korola Megna</h3>
            <p>United States of America</p>
            <div className="reviews">
              <i className="fas fa-star"></i> 4.5 (25 Reviews)
            </div>
          </div>
        </div>
        <div className="place">
        <img
  alt="London"
  height="400"
  src="images/London.jpg"
  width="600"
/>
          <div className="details">
            <div className="price">$500</div>
            <div className="duration">5 Days</div>
            <h3>London</h3>
            <p>United States of America</p>
            <div className="reviews">
              <i className="fas fa-star"></i> 4.5 (25 Reviews)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
