import React from "react";
import JobWidget from "../JobWidget";
import CommunitiesWidget from "../CommunitiesWidget";
import ResourcesWidget from "../ResourcesWidget";

const HomePage = () => {
  return (
    <main role="main">
      <section className="jobs-section">
        <JobWidget />
        <JobWidget />
        <JobWidget />
      </section>
      <section className="communities-section">
        <CommunitiesWidget />
      </section>
      <section className="resources-section">
        <ResourcesWidget />
        <ResourcesWidget />
      </section>
    </main>
  );
};

export default HomePage;
