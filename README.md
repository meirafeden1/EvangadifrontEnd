evangadi-forum-frontend/
│── public/                 # Static assets (favicon, images, etc.)
│── src/
│   │── assets/             # Images, icons, logos
│   │── components/         # Reusable UI components
│   │   │── Header/
│   │   │   │── Header.jsx
│   │   │   │── Header.css
│   │   │── Footer/
│   │   │   │── Footer.jsx
│   │   │   │── Footer.css
│   │   │── Auth/
│   │   │   │── Login.jsx
│   │   │   │── Signup.jsx
│   │   │   │── Auth.css
│   │   │── About/
│   │   │   │── About.jsx
│   │   │   │── About.css
│   │   │── Home/
│   │   │   │── Home.jsx
│   │   │   │── Home.css
│   │   │── Question/
│   │   │   │── Question.jsx
│   │   │   │── Question.css
│   │   │── Answer/
│   │   │   │── Answer.jsx
│   │   │   │── Answer.css
│   │
│   │── pages/              # Pages that combine components
│   │   │── AuthPage.jsx    # Combines Login + Signup with navigation
│   │   │── HomePage.jsx
│   │   │── QuestionPage.jsx
│   │   │── AnswerPage.jsx
│   │
│   │── context/            # React Context (for Auth state, global state)
│   │   │── AuthContext.jsx
│   │
│   │── services/           # API calls
│   │   │── api.js          # Axios instance + functions for signup, login, fetch questions, etc.
│   │
│   │── router/             # React Router setup
│   │   │── AppRouter.jsx
│   │
│   │── App.jsx             # Main App Component
│   │── main.jsx            # Entry point
│   │── index.css           # Global styles
│
│── package.json
│── vite.config.js
