import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 400);

          return 100;
        }

        return prev + 2;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="loading-dots">
          <span></span>

          <span></span>

          <span></span>
        </div>

        <h1>Welcome to My Portofolio Website</h1>

        <p>Initializing Portfolio...</p>

        <div className="progress-wrapper">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
}
