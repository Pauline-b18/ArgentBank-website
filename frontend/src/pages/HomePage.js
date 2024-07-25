import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>No fees. No minimum deposit. High interest rates.</h1>
          <p>Open a savings account with Argent Bank today!</p>
        </div>
      </section>
      <section className="features">
        <div className="feature-item">
          <div className="icon">💬</div>
          <h3>You are our #1 priority</h3>
          <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
        </div>
        <div className="feature-item">
          <div className="icon">💰</div>
          <h3>More savings means higher rates</h3>
          <p>The more you save with us, the higher your interest rate will be!</p>
        </div>
        <div className="feature-item">
          <div className="icon">🔒</div>
          <h3>Security you can trust</h3>
          <p>We use top of the line encryption to make sure your data and money is always safe.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
