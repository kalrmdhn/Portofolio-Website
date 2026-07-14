export const projects = [
  // FEATURED
  {
    id: "cgv-dashboard",

    featured: true,

    category: "data",

    type: "Business Intelligence Project",

    title: "CGV Business Analytics Dashboard",

    subtitle: "Customer Behavior & Revenue Analysis",

    description:
      "Business analytics project to analyze customer behavior, revenue performance, and customer preferences using Excel and Power BI.",

    objective:
      "The objective of this project is to analyze movie ticket sales data to understand customer purchasing behavior, identify top-performing movie genres, evaluate seat preferences, and measure repeat purchase patterns. By leveraging Microsoft Excel and Power BI, this project aims to transform raw transactional data into actionable business insights through data analysis and interactive dashboard visualization.",

    dashboard: "/images/dbpj1.svg",

    businessQuestions: [
      "Which day type (Weekday or Weekend) generates higher total revenue?",
      "Which seat type is the most preferred by customers?",
      "Which movie genres are most popular during weekdays and weekends?",
      "Which movie genre generates the highest total revenue?",
      "How does customer repeat purchase behavior differ between weekdays and weekends?",
    ],

    insights: [
      "Weekdays generated approximately 71% of total revenue.",
      "Premium seats were the most preferred seat type.",
      "Thriller generated the highest revenue.",
      "Sci-Fi and Thriller showed strong customer demand.",
      "Repeat purchase rate reached 48.4%.",
      "Customer purchasing behavior was relatively consistent.",
    ],

    charts: [
      {
        title: "Revenue by Day Type",

        image: "/images/total_revenue.png",

        description:
          "Comparison of revenue generated between weekdays and weekends.",

        finding: "Weekdays contributed approximately 71% of total revenue.",
      },

      {
        title: "Seat Type Preference",

        image: "/images/seat type.png",

        description: "Analysis of customer seat preferences.",

        finding: "Premium seats were the most preferred seating category.",
      },

      {
        title: "Movie Genre by Day Type",

        image: "/images/genre by day type.png",

        description: "Comparison of genre popularity by day type.",

        finding: "Sci-Fi and Thriller performed strongly during weekdays.",
      },

      {
        title: "Genre Performance",

        image: "/images/revenue by genre.png",

        description: "Revenue contribution by movie genre.",

        finding: "Thriller generated the highest total revenue.",
      },

      {
        title: "Repeat Purchase",

        image: "/images/purchase again.png",

        description: "Customer repeat purchase behavior.",

        finding: "Repeat purchase rate reached 48.4%.",
      },
    ],

    outcomes: [
      "Successfully developed an interactive dashboard.",
      "Identified key revenue drivers.",
      "Analyzed customer behavior patterns.",
      "Provided business recommendations.",
      "Improved business understanding through data visualization.",
    ],

    tools: ["Excel", "Power BI"],

    image: "/images/dbpj1.svg",
  },

  // OTHER PROJECTS
  {
    id: "stock-prediction",

    category: "thesis",

    featured: false,

    title: "Stock Price Prediction",

    subtitle: "Skripsi Project",

    description: "Predicting stock prices using machine learning algorithms.",

    tools: ["Python", "Random Forest", "XGBoost", "LSTM"],

    image: "/images/saham.png",
  },

  {
    id: "webgis",

    category: "web",

    featured: false,

    title: "Website Tree Management Systems",

    subtitle: "Internship Project",

    description:
      "Interactive geographic information system using CodeIgniter and Leaflet.",

    tools: ["CodeIgniter", "Leaflet", "MySQL"],

    image: "/images/pohon.png",
  },
];
