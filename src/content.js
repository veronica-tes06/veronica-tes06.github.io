// Text and data for every section of the site.

export const profile = {
  name: "Veronica Tesarova",
  role: "Software Engineer · Testing, Cloud & AI",
  tagline:
    "From Robot Framework tests in CI pipelines to guardrails that keep AI agents safe, I like software that's tested, trustworthy and clearly explained.",
  location: "Mullingar, Co. Westmeath",
  status: "Looking for a graduate software engineering role, 2027",
  github: "https://github.com/veronica-tes06",
  linkedin: "https://www.linkedin.com/in/veronica-tesarova",
  email: "Veronica2006tes@gmail.com",
  // The CV is bundled into the site (see src/assets/cv.pdf), so the download
  // also works from the single offline HTML file.
  showCv: true,
};

export const about = {
  paragraphs: [
    "I'm a final-year student on the BSc (Hons) in Software Design with AI for Cloud Computing at the Technological University of the Shannon, and I've been on the Dean's Honours List in both 2023/24 and 2024/25. Alongside my degree I've completed three software engineering placements at Ericsson in Athlone, most recently writing automated tests for rApps, running CI pipelines on Kubernetes and researching how to get better code out of AI coding agents.",
    "What I enjoy most is solving problems with solid solutions.",
    "Outside of code you'll find me going to the gym, playing the guitar or reading books. I am also a fan of Eurovision, which explains two of the projects below.",
  ],
  facts: [
    { label: "Studying", value: "BSc (Hons) Software Design with AI for Cloud Computing, TUS" },
    { label: "Graduating", value: "2027" },
    { label: "Awards", value: "Dean's Honours List, 2023/24 and 2024/25" },
    { label: "Industry", value: "3 placements at Ericsson, Athlone" },
    { label: "Based in", value: "Mullingar, Co. Westmeath" },
  ],
};

export const experience = [
  {
    org: "Ericsson",
    place: "Athlone",
    title: "Software Engineering Intern",
    periods: ["Jan – Aug 2026"],
    summary: "My longest placement, working on test automation and CI for rApps in a cloud-native environment.",
    points: [
      "Developed automated Robot Framework test cases for rApps, building vulnerability scanning and resilience testing directly into CI pipelines",
      "Managed containerised application deployments and CI workflows with Kubernetes, Docker and Jenkins",
      "Monitored pipelines, troubleshot system failures and did root-cause analysis on failing builds",
      "Researched and applied Spec-Driven Development for AI-assisted coding, structuring documentation and context so AI agents generate better code",
      "Presented my findings on AI-assisted development to more than 50 colleagues and stakeholders",
    ],
    tags: ["Robot Framework", "Kubernetes", "Docker", "Jenkins", "CI/CD", "Spec-Driven Development"],
  },
  {
    org: "Ericsson",
    place: "Athlone",
    title: "Software Engineering Intern",
    periods: ["Jun – Aug 2025"],
    summary: "Worked with APIs and wrote database queries in a cloud-native environment as part of a development team.",
    points: [],
    tags: ["APIs", "SQL", "Cloud-native"],
  },
  {
    org: "Ericsson",
    place: "Athlone",
    title: "Software Engineering Intern",
    periods: ["Jul – Aug 2024"],
    summary: "Built front-end functionality in JavaScript, HTML and CSS, using Git for version control within a Kanban workflow.",
    points: [],
    tags: ["JavaScript", "HTML & CSS", "Git", "Kanban"],
  },
];

export const leadership = [
  {
    title: "Mentor, Ericsson INFUSE programme",
    when: "Jun to Aug 2026",
    text: "Guided summer interns through technical setup and team workflows.",
  },
  {
    title: "Campus societies, TUS",
    when: "2024-2025",
    text: "Helped establish and run the Chess Society and the Christian Union.",
  },
  {
    title: "Volunteer, Green Campus Society, TUS",
    when: "2024-2025",
    text: "Took part in campus litter picks.",
  },
  {
    title: "Volunteer Camp Leader, Castledaly Manor",
    when: "Jul 2024",
    text: "Coordinated group activities, was responsible for child safety and supported kitchen logistics.",
  },
];

export const education = {
  org: "Technological University of the Shannon",
  title: "BSc (Hons) Software Design with AI for Cloud Computing",
  period: "2023 – 2027",
  modules:
    "Data Mining & Machine Learning, Data Visualisation, Web Development, Databases, Networks, Agile Methodologies, Software Development (Java, Python)",
  honours: [
    "Dean's Honours List, Faculty of Engineering and Technology (2023/24 and 2024/25)",
    "Ranked in the top 5 students for Software Development (Java) in Year 2",
  ],
  fyp: {
    name: "AgentGuard",
    status: "Final year project · in progress",
    text:
      "A tool that helps non-experts create guardrails for tool-using LLM agents and then tests those guardrails against prompt-injection attacks. The main scenario is a TUS student-assistant agent.",
    tags: ["LLM agents", "Guardrails", "Prompt injection", "AI safety"],
  },
};

export const projects = [
  {
    id: "exoplanet",
    kicker: "Machine learning · Python",
    name: "Exoplanet Disposition Classifier",
    oneLiner:
      "Predicts whether a NASA Kepler signal is a confirmed planet, a candidate or a false positive.",
    repo: "https://github.com/veronica-tes06/exoplanet-disposition-classifier",
    stats: [
      { value: "86.8%", label: "accuracy (5-fold CV)" },
      { value: "9,564", label: "Kepler objects" },
      { value: "60", label: "input features" },
    ],
    problem:
      "Kepler flagged thousands of dips in starlight. Some are planets, many are eclipsing binaries or noise. I wanted a model that sorts them using only the measurements, not NASA's own verdict.",
    built: [
      "Data loading and feature engineering in pandas: 58 columns in five groups, plus two derived features (duration ÷ period^⅓ from Kepler's third law, and a grazing-transit flag)",
      "Gradient boosting and decision-tree models in scikit-learn, with a seeded 80/20 split and 5-fold cross-validation",
      "A Tkinter GUI to train, test (confusion matrix, accuracy, macro F1), look up any KOI by name, or type in a new planet",
    ],
    lesson:
      "The first version hit about 95% accuracy, which looked great until I realised columns like koi_score and the false-positive flags come from NASA's vetting pipeline. The model was copying the answer. I removed them on purpose, and 86.8% is the honest number. The biggest real gains came from centroid-offset features (+5.7 points) and signal-quality features (+8 points).",
    next:
      "Train on TESS and K2 data alongside Kepler once their measurements can be lined up, add SHAP explanations so the app shows which features drove each prediction, and turn it into a small web app so anyone can try it.",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Tkinter"],
  },
  {
    id: "crud",
    kicker: "Full-stack web · REST API",
    name: "Eurovision CRUD App",
    oneLiner:
      "A single-page web app for browsing and managing Eurovision country stats and users, backed by a REST API.",
    repo: "https://github.com/veronica-tes06/eurovision-crud-app",
    stats: [
      { value: "10", label: "REST endpoints" },
      { value: "37", label: "countries in sample data" },
      { value: "3", label: "layers: UI · API · DB" },
    ],
    problem:
      "Practise the whole web stack end to end: a front end that never reloads, an API with proper HTTP verbs and status codes, and a relational database underneath.",
    built: [
      "A PHP 8 REST API with the Slim framework: GET, POST, PUT and DELETE for countries and users, returning 409 when a username is taken",
      "A jQuery + Bootstrap single-page UI with a scrolling row of flag cards, a sortable and searchable DataTables view and a details modal",
      "Form validation (no duplicate countries, only update if something changed) and a MySQL schema with sample data",
      "A router for PHP's built-in server so it runs on macOS, Windows or Linux without XAMPP",
    ],
    lesson:
      "This was the first time I built both sides of a web app and made them talk to each other. I learned to design a REST API around resources and HTTP verbs, to return the right status codes (like 409 when a username is already taken) and to debug requests in the browser's Network tab. Getting it to run on PHP's built-in server instead of XAMPP also taught me to think about how someone else will set up and run my code.",
    next:
      "Package the app and its database with Docker Compose so it starts with one command, add logins with roles so only admins can edit countries, and add charts showing each country's results over the years.",
    tech: ["PHP 8", "Slim", "MySQL", "jQuery", "Bootstrap", "DataTables", "REST"],
  },
  {
    id: "tracker",
    kicker: "Desktop app · OOP",
    name: "Eurovision 2025 Tracker",
    oneLiner:
      "A PyQt5 desktop app for browsing every 2025 entry and casting your own jury votes, then saving your scoreboard.",
    repo: "https://github.com/veronica-tes06/eurovision-tracker",
    stats: [
      { value: "37", label: "entries to browse" },
      { value: "10", label: "jury scores to give" },
      { value: "2", label: "custom exception types" },
    ],
    problem:
      "Built in Year 2 to practise object-oriented design, GUI programming and file handling, around a rule set I know well: the Eurovision jury vote.",
    built: [
      "A Country class with encapsulated attributes and a RatedCountry subclass for voted countries",
      "Voting logic where each score from 12 down to 1 can only go to one country, so giving it again moves it",
      "Custom CountryInputError and ScoreBoardError exceptions for validation, e.g. you can't publish until all ten scores are used",
      "Plain-text persistence: countries load at start-up, Archive writes them back, and the scoreboard is exported as a formatted table",
    ],
    lesson:
      "Getting the 'one score, one country' rule right was the interesting part. Removing the score from whoever already had it, then updating or adding the new country, is a small piece of logic that's easy to get subtly wrong.",
    next:
      "Store countries and votes in SQLite instead of text files, show errors in pop-up dialogs, and add a view that compares my scoreboard with the real 2025 results.",
    tech: ["Python 3", "PyQt5", "Qt Designer", "OOP", "File I/O"],
  },
];

// Results from the exoplanet README (5-fold cross-validation, all 9,564 KOIs)
export const exoplanetResults = [
  { model: "Decision tree, 6 features (first version)", acc: 71, f1: 0.59 },
  { model: "Gradient boosting, 6 core features", acc: 72.7, f1: 0.67 },
  { model: "Decision tree, all features", acc: 80.8, f1: 0.77 },
  { model: "Random forest, all features", acc: 85.9, f1: 0.82 },
  { model: "Gradient boosting, all features", acc: 86.8, f1: 0.84, best: true },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "PHP", "SQL", "HTML & CSS", "XML"] },
  { group: "Testing & DevOps", items: ["Robot Framework", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Maven", "Git & GitHub"] },
  { group: "AI & data", items: ["scikit-learn", "pandas", "NumPy", "Matplotlib", "LLM agents", "Spec-Driven Development"] },
  { group: "Web", items: ["React", "REST APIs", "Slim", "jQuery", "Bootstrap"] },
  { group: "Ways of working", items: ["Agile & Kanban", "Root-cause analysis", "Presenting", "Mentoring", "Technical writing"] },
];
