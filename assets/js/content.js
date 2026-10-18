window.SITE = {
  name: "Solan Abate",
  location: "Dembi Dollo, Ethiopia",
  email: "solanabate9@gmail.com",
  github: "https://github.com/DevSolan1",
  linkedin: "https://www.linkedin.com/in/solan-abate-0680b33a2",
  resume: "assets/Resume.pdf",
  skills: {
    "Programming languages": ["Java", "JavaScript", "TypeScript", "Python", "C++"],
    "Frontend": ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"],
    "Mobile": ["React Native"],
    "Backend": ["Node.js", "Django", "Java client-server programming"],
    "Design": ["Figma", "Canva", "Responsive design", "Accessibility"],
    "Testing": ["Jest", "Postman", "Manual testing", "Browser DevTools"],
    "Deploy & Tools": ["Git", "GitHub", "GitHub Pages", "Render", "Vercel", "VS Code"],
    "Computer science": ["Data structures and algorithms", "Object-oriented programming", "Database fundamentals", "Software engineering principles"]
  },
  projects: [
    {
      title: "Complaint Management System",
      status: "Completed",
      description: "A Django 5 web app for submitting, tracking and resolving customer complaints with role-based access for Customers, Agents and Managers.",
      problem: "Organizations lose track of customer complaints across email and paper, with no clear ownership, status or history.",
      features: ["Role-based access (Customer, Agent, Manager)", "Reference numbers and status lifecycle with history", "Threaded comments with staff-only notes", "Email notifications", "Filters and role dashboards", "Read-only REST API"],
      tech: ["Python", "Django", "Django REST Framework", "Bootstrap", "SQLite", "PostgreSQL"],
      repo: "https://github.com/DevSolan1/Complaint_System",
      demo: "https://complaint-management-system-7z5f.onrender.com/",
      image: "assets/img/complaint-system.png"
    },
    {
      title: "Diabetes Prediction System",
      status: "Completed",
      description: "A machine learning web app that predicts diabetes likelihood from patient health data.",
      problem: "Early screening for diabetes is often unavailable; a quick data-driven estimate can prompt people to seek medical advice sooner.",
      features: ["Trained classification model", "Simple form for patient health data", "Instant prediction result"],
      tech: ["Python", "Scikit-learn", "Streamlit"],
      repo: "https://github.com/DevSolan1/Diabetic-Prediction-System",
      demo: "https://diabetic-prediction-system-qg44ur2ea8ktjbggscrxhv.streamlit.app/",
      image: "assets/img/diabetes-prediction.png"
    },
    {
      title: "Responsive Personal Portfolio",
      status: "In Progress",
      description: "This website, built with HTML, Tailwind CSS and vanilla JavaScript.",
      problem: "I needed one fast, accessible place to present my skills and projects to recruiters and collaborators.",
      features: ["Light and dark theme", "Data-driven skills and projects", "Accessible, responsive layout", "Deploys free to GitHub Pages"],
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      repo: "",
      demo: "",
      image: "assets/img/portfolio.png"
    }
  ]
};
