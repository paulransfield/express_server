import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="video-container" style={{ margin: '50px 0' }}>
        <iframe
          title="Paul"
          width="640"
          height="480"
          src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Dashboard;
