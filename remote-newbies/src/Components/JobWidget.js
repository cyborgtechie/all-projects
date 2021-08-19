import React from "react";

class JobWidget extends React.Component {
  render() {
    return (
      <div className="card">
        <h4>Job Title</h4>
        <div>
          <span className="tags">Developer</span>
          <span className="tags">Full-time</span>
        </div>
        <div className="hiring-manager">
          <div>
            <span className="image-placeholder"></span>
            Alex Moss Head of HR
          </div>
          <button>Apply</button>
        </div>
      </div>
    );
  }
}

export default JobWidget;
