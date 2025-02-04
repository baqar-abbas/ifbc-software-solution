import React, { useState } from "react";
import "./tabs.css";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="tabs-section">
      <h2 className="tabs-section-title">About Us</h2>
      <div className="tabs-container">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "overview" ? "tab active" : "tab"}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={activeTab === "related" ? "tab active" : "tab"}
            onClick={() => setActiveTab("related")}
          >
            Related
          </button>
          <button
            className={activeTab === "more-info" ? "tab active" : "tab"}
            onClick={() => setActiveTab("more-info")}
          >
            More Info
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "overview" && (
            <div className="content">
              <h2>Overview</h2>
              <p>
                IFBC Info Tech specializes in delivering high-quality, scalable,
                and innovative software solutions to help businesses grow in the
                digital era. Whether you're a startup looking for an MVP or an
                enterprise in need of a robust platform, we provide tailored
                solutions to fit your needs.
              </p>
              <ul>
                <li>🔹 Custom Software Development</li>
                <li>🔹 End-to-End Web & Mobile Solutions</li>
                <li>🔹 Data-Driven Decision Making</li>
                <li>🔹 Scalable Cloud Integrations</li>
              </ul>
            </div>
          )}

          {activeTab === "related" && (
            <div className="content">
              <h2>Related</h2>
              <p>
                Our services extend across multiple domains, including FinTech,
                Healthcare, E-Commerce, and AI-powered automation. We leverage
                modern frameworks and best practices to ensure seamless user
                experiences and high performance.
              </p>
              <h3 className="tech">🛠 Technologies We Use:</h3>
              <ul>
                <li>💡 Frontend: React, Vue.js, Angular</li>
                <li>
                  💡 Backend: Node.js, Ruby on Rails, ASP .NET Core with C#
                </li>
                <li>💡 Database: MongoDB, PostgreSQL, SQL Server, My SQL</li>
                <li>💡 DevOps: AWS, Docker, Kubernetes</li>
              </ul>
            </div>
          )}

          {activeTab === "more-info" && (
            <div className="content">
              <h2>More Info</h2>
              <p>
                At IFBC Info Tech, we believe in a client-first approach,
                ensuring that every solution we build is not only innovative but
                also aligned with business goals. Our agile development process
                ensures quick iterations and continuous improvements.
              </p>
              <h3 className="choose">✅ Why Choose Us?</h3>
              <ul>
                <li>🚀 Agile & Scalable Solutions</li>
                <li>🔒 Security-First Approach</li>
                <li>💡 Innovation & Cutting-Edge Tech</li>
                <li>📈 Proven Track Record of Success</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
