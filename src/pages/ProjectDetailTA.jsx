import { Link } from "react-router-dom";

function ProjectDetailTA() {
  return (
    <div className="stock-page">
      {/* HEADER */}
      <section className="stock-header-section">
        <div className="stock-header">
          <Link to="/projects" className="stock-back-button">
            <span className="back-arrow">←</span>
            <span>Back to Projects</span>
          </Link>

          <div className="stock-project-type">Skripsi Project</div>

          <h1 className="stock-title">
            Stock Price Prediction using
            <br />
            Random Forest, XGBoost & LSTM
          </h1>

          <h2 className="stock-subtitle">
            Comparative Analysis of Machine Learning and Deep Learning Models
          </h2>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="stock-overview-section">
        <div className="stock-overview-container">
          {/* LEFT */}
          <div className="stock-overview-card">
            <h2>Project Overview</h2>

            <p>
              This study aims to compare the performance of Machine Learning and
              Deep Learning algorithms in predicting stock prices of
              Freeport-McMoRan Inc. (FCX). Three predictive models, namely
              Random Forest, XGBoost, and Long Short-Term Memory (LSTM), were
              developed and evaluated using historical stock market data.
            </p>

            <div className="stock-tags">
              <span>Time Series</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>Stock Prediction</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="stock-info-card">
            <h2>Project Information</h2>

            <div className="stock-info-grid">
              <div className="stock-info-item">
                <label>Role</label>
                <h4>Data Scientist</h4>
              </div>

              <div className="stock-info-item">
                <label>Duration</label>
                <h4>4 Months</h4>
              </div>

              <div className="stock-info-item">
                <label>Dataset</label>
                <h4>investing.com</h4>
              </div>

              <div className="stock-info-item">
                <label>Models</label>
                <h4>RF, XGB, LSTM</h4>
              </div>

              <div className="stock-info-item">
                <label>Language</label>
                <h4>Python</h4>
              </div>

              <div className="stock-info-item">
                <label>Status</label>
                <h4>Completed</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DATASET SECTION */}
      <section className="stock-dataset-section">
        <div className="stock-dataset-card">
          <h2>Dataset Information</h2>

          <div className="stock-dataset-preview-container">
            <img
              src="/images/db_fcx.png"
              alt="FCX Dataset Preview"
              className="stock-dataset-preview"
            />
          </div>

          <div className="stock-dataset-grid">
            <div className="stock-dataset-item">
              <span>Source</span>
              <h4>investing.com</h4>
            </div>

            <div className="stock-dataset-item">
              <span>Period</span>
              <h4>2020 - 2025</h4>
            </div>

            <div className="stock-dataset-item">
              <span>Features</span>
              <h4>6 Columns</h4>
            </div>

            <div className="stock-dataset-item">
              <span>Target</span>
              <h4>Closing Price</h4>
            </div>

            <div className="stock-dataset-item">
              <span>Type</span>
              <h4>Time Series</h4>
            </div>

            <div className="stock-dataset-item">
              <span>Company</span>
              <h4>Freeport McMoRan (FCX)</h4>
            </div>
          </div>
        </div>
      </section>
      {/* PERFORMANCE COMPARISON */}
      <section className="stock-performance-section">
        <div className="stock-performance-card">
          <div className="stock-performance-header">
            <h2>Model Performance Comparison</h2>

            <p>
              Comparison of model performance using Root Mean Square Error
              (RMSE). Lower RMSE indicates better prediction accuracy.
            </p>
          </div>

          <div className="stock-performance-content">
            <div className="stock-performance-chart">
              <img src="/images/rmse comparison.png" alt="" />
            </div>

            <div className="stock-performance-result">
              <div className="stock-performance-item">
                <span>Random Forest</span>
                <h4>12.12</h4>
              </div>

              <div className="stock-performance-item">
                <span>XGBoost</span>
                <h4>12.58</h4>
              </div>

              <div className="stock-performance-item stock-best-model">
                <span>Best Model (LSTM)</span>
                <h4>1.71</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ACTUAL VS PREDICTION */}
      <section className="stock-prediction-section">
        <div className="stock-prediction-wrapper">
          <div className="stock-prediction-header">
            <h2>Actual vs Prediction Results</h2>

            <p>
              Comparison between actual stock prices and predicted values
              generated by each predictive model.
            </p>
          </div>

          <div className="stock-prediction-grid">
            {/* RANDOM FOREST */}
            <div className="stock-prediction-card">
              <h3>Random Forest</h3>

              <img
                src="/images/rf.png"
                className="stock-prediction-img"
                alt=""
              />

              <div className="stock-prediction-metric">
                <span>RMSE</span>
                <h4>12.12</h4>
              </div>
            </div>

            {/* XGBOOST */}
            <div className="stock-prediction-card">
              <h3>XGBoost</h3>

              <img
                src="/images/xgb.png"
                className="stock-prediction-img"
                alt=""
              />

              <div className="stock-prediction-metric">
                <span>RMSE</span>
                <h4>12.58</h4>
              </div>
            </div>

            {/* LSTM */}
            <div className="stock-prediction-card stock-best-model">
              <h3>LSTM</h3>

              <img
                src="/images/lstm.png"
                className="stock-prediction-img"
                alt=""
              />

              <div className="stock-prediction-metric">
                <span>RMSE</span>
                <h4>1.71</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LSTM TRAINING */}
      <section className="stock-training-section">
        <div className="stock-training-card">
          {/* HEADER */}
          <div className="stock-training-header">
            <h2>LSTM Training Process</h2>

            <p>
              Visualization of training and validation loss during the model
              learning process.
            </p>
          </div>

          {/* TOP */}
          <div className="stock-training-top">
            {/* LEFT */}
            <div className="stock-training-chart">
              <img src="/images/training_loss.png" alt="" />
            </div>

            {/* RIGHT */}
            <div className="stock-training-info">
              <div className="stock-training-item">
                <span>Best Model</span>
                <h4>LSTM</h4>
              </div>

              <div className="stock-training-item">
                <span>Epoch</span>
                <h4>30</h4>
              </div>

              <div className="stock-training-item">
                <span>Optimizer</span>
                <h4>Adam</h4>
              </div>

              <div className="stock-training-item">
                <span>Loss Function</span>
                <h4>MSE</h4>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="stock-training-summary">
            <h3>Training Analysis</h3>

            <p>
              The training and validation loss curves decrease consistently and
              converge without significant overfitting, indicating that the LSTM
              model successfully learned temporal patterns from historical stock
              price data.
            </p>
          </div>
        </div>
      </section>
      {/* TOOLS & KEY FINDINGS */}
      <section className="stock-bottom-section">
        {/* TOOLS */}
        <div className="stock-tools-card">
          <h2>Tools Used</h2>

          <div className="stock-tools-list">
            <div className="stock-tool-item">
              <img src="/images/py.svg" alt="" />

              <div className="stock-tool-content">
                <h4>Python</h4>

                <p>Machine Learning, Deep Learning, Data Processing</p>
              </div>
            </div>

            <div className="stock-tool-item">
              <img src="/images/gcolab.svg" alt="" />

              <div className="stock-tool-content">
                <h4>Google Colab</h4>

                <p>Model Training, Experimentation, Visualization</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY FINDINGS */}
        <div className="stock-findings-card">
          <h2>Key Findings</h2>

          <div className="stock-findings-list">
            <div>LSTM achieved the lowest RMSE score (1.71).</div>

            <div>
              Random Forest and XGBoost produced significantly higher prediction
              errors.
            </div>

            <div>
              LSTM successfully captured temporal dependencies in stock price
              movements.
            </div>

            <div>
              Deep Learning outperformed traditional Machine Learning models.
            </div>

            <div>
              LSTM demonstrated strong predictive capability for financial
              time-series forecasting.
            </div>
          </div>
        </div>
      </section>
      {/*batas akhir stock-page*/}
    </div>
  );
}

export default ProjectDetailTA;
