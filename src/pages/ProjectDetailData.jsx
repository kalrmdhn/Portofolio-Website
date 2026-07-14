import { Link } from "react-router-dom";

function ProjectDetailData({ project }) {
  console.log(project);
  console.log(project.businessQuestions);
  console.log(project.insights);
  console.log(project.charts);
  console.log(project.outcomes);
  console.log("dashboard", project.dashboard);
  console.log("charts", project.charts);
  console.log("first chart", project.charts[0]);
  return (
    <section className="project-data-page">
      {/* HEADER */}
      <div className="project-data-header">
        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <span className="project-data-type">{project.type}</span>

        <h1>{project.title}</h1>

        <h2>{project.subtitle}</h2>
      </div>

      {/* OBJECTIVE + DATASET */}
      {/* <div className="project-top-section"> */}
      <div className="project-top-grid">
        <div className="project-card project-objective-card">
          <div className="objective-header">
            <h1>Project Objective</h1>
          </div>

          <p className="objective-text">{project.objective}</p>

          <div className="objective-tags">
            <span>Revenue Analysis</span>

            <span>Customer Behavior</span>

            <span>Repeat Purchase</span>

            <span>Dashboard Visualization</span>
          </div>
        </div>

        {/* </div>
      <div className="dataset-section"> */}
        <div className="project-card">
          <h3>Dataset Information</h3>

          <div className="dataset-grid">
            <div className="dataset-card">
              <h2>500</h2>
              <span>Rows</span>
            </div>

            <div className="dataset-card">
              <h2>10</h2>
              <span>Columns</span>
            </div>

            <div className="dataset-card">
              <h2>0</h2>
              <span>Missing</span>
            </div>

            <div className="dataset-card">
              <h2>0</h2>
              <span>Duplicate</span>
            </div>

            <div className="dataset-card">
              <h2>8</h2>
              <span>Genres</span>
            </div>

            <div className="dataset-card">
              <h2>4</h2>
              <span>Seat Types</span>
            </div>

            <div className="dataset-card">
              <h2>5</h2>
              <span>Studio Types</span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* PROJECT INFO */}
      <div className="project-info-section">
        <div className="project-card">
          <h3>Project Information</h3>

          <div className="info-grid">
            <div className="info-card">
              <span>Role</span>
              <strong>Data Analyst</strong>
            </div>

            <div className="info-card">
              <span>Duration</span>
              <strong>2 Weeks</strong>
            </div>

            <div className="info-card">
              <span>Dataset</span>
              <strong>500 Records</strong>
            </div>

            <div className="info-card">
              <span>Tools</span>
              <strong>Excel + Power BI</strong>
            </div>

            <div className="info-card">
              <span>Project Type</span>
              <strong>Business Intelligence</strong>
            </div>

            <div className="info-card">
              <span>Status</span>
              <strong>Completed</strong>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN DASHBOARD */}
      <div className="dashboard-section">
        <div className="dashboard-card">
          <h3>Main Dashboard</h3>

          <img src={project.dashboard} className="dashboard-main" alt="" />
        </div>
      </div>

      {/* KPI */}
      <div className="kpi-section">
        <div className="project-card">
          <h3>Key Performance Indicators</h3>

          <div className="kpi-grid">
            <div className="kpi-card">
              <h2>$7,684.91</h2>
              <p>Total Revenue</p>
            </div>

            <div className="kpi-card">
              <h2>1,780</h2>
              <p>Total Ticket Sold</p>
            </div>

            <div className="kpi-card">
              <h2>4.27</h2>
              <p>Average Ticket Price</p>
            </div>

            <div className="kpi-card">
              <h2>37.4</h2>
              <p>Average Customer Age</p>
            </div>

            <div className="kpi-card">
              <h2>48.4%</h2>
              <p>Repeat Purchase Rate</p>
            </div>
          </div>
        </div>
      </div>
      {/* BUSINESS QUESTIONS */}
      <div className="business-section">
        <div className="project-card">
          <h3>Business Questions</h3>

          <div className="business-grid">
            {project.businessQuestions.map((item, index) => (
              <div key={index} className="business-card">
                <span>0{index + 1}</span>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* PROCESS */}
      <div className="process-section">
        <div className="project-card">
          <h3>Analysis Process</h3>

          <div className="process-timeline">
            <div className="process-item">
              <div className="process-number">1</div>

              <h4>Data Collection</h4>

              <p>Imported dataset into Excel and Power BI.</p>
            </div>

            <div className="process-item">
              <div className="process-number">2</div>

              <h4>Data Cleaning</h4>

              <p>Checked missing values and duplicates.</p>
            </div>

            <div className="process-item">
              <div className="process-number">3</div>

              <h4>Exploratory Analysis</h4>

              <p>Explored patterns, demographics and sales behavior.</p>
            </div>

            <div className="process-item">
              <div className="process-number">4</div>

              <h4>Business Analysis</h4>

              <p>Answered business questions.</p>
            </div>

            <div className="process-item">
              <div className="process-number">5</div>

              <h4>Dashboard Development</h4>

              <p>Created interactive dashboard.</p>
            </div>

            <div className="process-item">
              <div className="process-number">6</div>

              <h4>Insight Generation</h4>

              <p>Generated business insights.</p>
            </div>
          </div>
        </div>
      </div>
      {/* INSIGHTS */}
      <div className="insight-section">
        <div className="project-card">
          <h3>Key Insights</h3>

          <div className="insight-grid">
            {project.insights.map((item, index) => (
              <div key={index} className="insight-card">
                <div className="insight-icon">✓</div>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* RECOMMENDATIONS */}
      <div className="recommend-section">
        <div className="project-card">
          <h3>Business Recommendations</h3>

          <div className="recommend-grid">
            <div className="recommend-card">
              <h4>Increase Weekday Promotions</h4>

              <p>
                Since weekdays contribute approximately 71% of revenue,
                marketing campaigns should focus on maximizing weekday customer
                traffic.
              </p>
            </div>

            <div className="recommend-card">
              <h4>Expand Premium Seating</h4>

              <p>
                Premium seats are highly preferred by customers, indicating
                opportunities to increase premium capacity.
              </p>
            </div>

            <div className="recommend-card">
              <h4>Invest in Thriller & Sci-Fi</h4>

              <p>
                These genres consistently generate high demand and revenue
                performance.
              </p>
            </div>

            <div className="recommend-card">
              <h4>Develop Loyalty Program</h4>

              <p>
                With a repeat purchase rate of 48.4%, loyalty strategies can
                further improve retention.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* DASHBOARD BREAKDOWN */}
      <div className="breakdown-section">
        <div className="project-card">
          <h3>Dashboard Breakdown</h3>

          <div className="breakdown-grid">
            {project.charts.map((chart, index) => (
              <div className="breakdown-card" key={index}>
                <img src={chart.image} alt="" />

                <h4>{chart.title}</h4>

                <p className="chart-desc">{chart.description}</p>

                <div className="chart-finding">
                  <span>Key Finding</span>

                  <p>{chart.finding}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      {/* <div className="bottom-section"> */}
        <div className="project-bottom">
          <div className="project-card">
            <h3>Tools Used</h3>

            <div className="tools-grid">
              <div className="tool-card">
                <img src="/images/excel.png" alt="" />

                <h4>Microsoft Excel</h4>

                <p>Data Cleaning, EDA, Pivot Analysis</p>
              </div>

              <div className="tool-card">
                <img src="/images/bi.png" alt="" />

                <h4>Power BI</h4>

                <p>Dashboard, DAX, Visualization</p>
              </div>
            </div>
          </div>

          <div className="project-card">
            <h3>Project Outcome</h3>

            <div className="outcome-list">
              {project.outcomes.map((item, index) => (
                <div key={index}>✓ {item}</div>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default ProjectDetailData;
