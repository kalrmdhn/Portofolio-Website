import { Link } from "react-router-dom";

function ProjectDetailWeb() {
  return (
    <section className="webgis-page">
      <div className="webgis-container">
        <Link to="/projects" className="webgis-back-btn">
          <span>←</span>
          <span>Back to Projects</span>
        </Link>

        <div className="webgis-hero">
          <div className="webgis-badge">Internship Project</div>

          <h1 className="webgis-title">
            Web GIS Tree
            <br />
            Management System
          </h1>

          <p className="webgis-subtitle">
            Interactive Geographic Information System
            <br />
            for Tree Monitoring & Maintenance
          </p>
        </div>
      </div>
      {/* ================= PROJECT OVERVIEW ================= */}

      <section className="webgis-overview">
        {/* LEFT */}
        <div className="webgis-card">
          <span className="webgis-card-label">Project Overview</span>

          <h2>Building a Digital Tree Monitoring System</h2>

          <p>
            This project was developed during my internship at the Central Java
            Provincial Government to support tree inventory, monitoring, and
            maintenance through a web-based Geographic Information System
            (WebGIS). The system helps manage tree data more efficiently,
            streamline maintenance workflows, and improve public safety through
            centralized monitoring.
          </p>
        </div>

        {/* RIGHT */}

        <div className="webgis-card">
          <span className="webgis-card-label">Project Information</span>

          <div className="webgis-info-grid">
            <div className="webgis-info-item">
              <span>Role</span>
              <strong>Full Stack Developer</strong>
            </div>

            <div className="webgis-info-item">
              <span>Duration</span>
              <strong>2 Months</strong>
            </div>

            <div className="webgis-info-item">
              <span>Organization</span>
              <strong>Central Java Provincial Government</strong>
            </div>

            <div className="webgis-info-item">
              <span>Status</span>
              <strong>Completed</strong>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WORKFLOW ================= */}

      <section className="webgis-workflow">
        <div className="webgis-card">
          <span className="webgis-card-label">Workflow</span>

          <h2>Tree Management Workflow</h2>

          <div className="webgis-workflow-line">
            <div className="workflow-item">
              <div className="workflow-dot"></div>

              <h4>Report</h4>

              <p>
                Field staff records tree conditions using GPS coordinates and
                photos.
              </p>
            </div>

            <div className="workflow-item">
              <div className="workflow-dot"></div>

              <h4>Validate</h4>

              <p>
                Managers review, validate, and determine the appropriate
                treatment.
              </p>
            </div>

            <div className="workflow-item">
              <div className="workflow-dot"></div>

              <h4>Assign</h4>

              <p>Workers, schedules, and required equipment are assigned.</p>
            </div>

            <div className="workflow-item">
              <div className="workflow-dot"></div>

              <h4>Execute</h4>

              <p>Workers complete the task and upload execution evidence.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= INTERACTIVE MAP ================= */}

      <section className="webgis-showcase">
        <div className="webgis-card">
          <div className="webgis-showcase-grid">
            {/* LEFT */}

            <div className="webgis-showcase-image">
              <div className="webgis-browser">
                <div className="webgis-browser-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img src="/images/peta.png" alt="Interactive Map" />
              </div>
            </div>

            {/* RIGHT */}

            <div className="webgis-showcase-content">
              <span className="webgis-card-label">Interactive Map</span>

              <h2>Real-time Tree Distribution</h2>

              <p>
                Visualize every validated tree through an interactive GIS map.
                Managers can quickly identify tree conditions, monitor
                maintenance status, and filter data based on validation results.
              </p>

              <ul className="webgis-feature-list">
                <li>Interactive GIS Map Visualization</li>

                <li>Condition-based Tree Markers</li>

                <li>Validation Status Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ================= TREE INVENTORY ================= */}

      <section className="webgis-inventory">
        <div className="webgis-card">
          <div className="webgis-inventory-grid">
            <div className="webgis-inventory-content">
              <span className="webgis-card-label">Tree Inventory</span>

              <h2>Centralized Tree Inventory</h2>

              <p>
                Manage and organize all recorded tree information in one
                centralized database. Managers can review tree conditions,
                update maintenance notes, and validate reports submitted by
                field staff.
              </p>

              <ul className="webgis-inventory-list">
                <li>Comprehensive Tree Database</li>
                <li>Condition & Validation Management</li>
                <li>Search and Update Records</li>
              </ul>
            </div>

            <div className="webgis-inventory-image">
              <div className="webgis-browser">
                <div className="webgis-browser-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img src="/images/report.png" alt="Tree Inventory" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= GEOLOCATION ================= */}

      <section className="webgis-geolocation">
        <div className="webgis-card">
          <div className="webgis-geolocation-grid">
            <div className="webgis-geolocation-image">
              <div className="webgis-browser">
                <div className="webgis-browser-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img src="/images/geo.png" alt="Geolocation" />
              </div>
            </div>

            <div className="webgis-geolocation-content">
              <span className="webgis-card-label">Geolocation Report</span>

              <h2>Field Data Collection with GPS</h2>

              <p>
                Field staff report tree conditions directly from the inspection
                location using GPS coordinates, photos, and detailed information
                before submitting the report for validation.
              </p>

              <ul className="webgis-geolocation-list">
                <li>Automatic GPS Coordinates</li>
                <li>Photo Documentation</li>
                <li>Tree Condition Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ================= EXECUTION ================= */}

      <section className="webgis-execution">
        <div className="webgis-card">
          <div className="webgis-execution-grid">
            <div className="webgis-execution-content">
              <span className="webgis-card-label">Execution Report</span>

              <h2>Maintenance Execution Tracking</h2>

              <p>
                Workers complete assigned maintenance tasks and upload execution
                photos as proof of completion. The execution status is updated
                automatically, allowing managers to monitor progress
                efficiently.
              </p>

              <ul className="webgis-execution-list">
                <li>Task Completion Status</li>
                <li>Execution Photo Upload</li>
                <li>Maintenance Progress Tracking</li>
              </ul>
            </div>

            <div className="webgis-execution-image">
              <div className="webgis-browser">
                <div className="webgis-browser-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img src="/images/report.png" alt="Execution Report" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= TECHNOLOGY & OUTCOME ================= */}

      <section className="webgis-summary">
        <div className="webgis-card">
          <div className="webgis-summary-grid">
            {/* LEFT */}

            <div className="webgis-tech">
              <span className="webgis-card-label">Technology Stack</span>

              <h2>Technologies Used</h2>

              <div className="webgis-tech-list">
                <span>CodeIgniter 4</span>

                <span>PHP</span>

                <span>MySQL</span>

                <span>Leaflet.js</span>

                <span>Bootstrap</span>

                <span>JavaScript</span>

                <span>HTML</span>

                <span>CSS</span>
              </div>
            </div>

            {/* RIGHT */}

            <div className="webgis-outcome">
              <span className="webgis-card-label">Project Outcome</span>

              <h2>What This System Achieved</h2>

              <ul className="webgis-outcome-list">
                <li>Centralized tree inventory management.</li>

                <li>Interactive GIS-based tree visualization.</li>

                <li>
                  Role-based workflow for field staff, managers, and workers.
                </li>

                <li>More efficient monitoring and maintenance process.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProjectDetailWeb;
