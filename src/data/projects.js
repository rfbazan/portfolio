// src/data/projects.js
const base = import.meta.env.BASE_URL

export const projects = [
  {
    id: 2,
    title: "Pickleball Tournament App",
    tagline: "Manages team creation, drafting, and point submissions for 40+ users.",
    category: "software",
    image: `${base}images/pickleball-app.png`,
    // Additional modal gallery images
    images: [
      `${base}images/draft.png`,
      `${base}images/leaderboard.png`,
      `${base}images/tournament.png`,
    ],
    link: "https://github.com/rfbazan",
    stack: ["Flask", "Python", "HTML/CSS"],
    detail: {
      problem: "Managing brackets, team drafts, schedules, and score tracking grew more complex as more participants entered a pickleball tournament, leading to errors and confusion.",
      solution: "Built a full-stack Flask web app that handles player registration, snake-draft team generation, live score entry, and standings all in one interface. Deployed publicly so players and refs could use it from their phones.",
      architecture: "Python/Flask backend with Jinja2-rendered pages for each app section (registration, draft, scoring, standings). Tournament state (players, teams, scores) was stored in a single JSON file acting as a lightweight data layer, giving all participants the ability to easily input their own scores for all to see. Deployed on Render.com's free tier, which didn't support a provisioned database, so the JSON store doubled as a practical substitute for a REST-API-backed data layer.",
      challenges: "The UI had to be intuitive and fully responsive on mobile devices so users could use it without guidance. Read/Writes needed to be handled carefully so as to not corrupt the data, since users were able to upload their own data (scores, names) at any time.",
      improvements: "Migrate the persistence layer to a real relational database (PostgreSQL) with a proper schema. Add polling or WebSockets so standings update live without a manual refresh.",
    },
  },
  {
    id: 1,
    title: "Athlete Tracking System",
    tagline: "Real-time player positioning via trilateration complete with data visualizations and analysis.",
    category: "embedded",
    image: `${base}images/soccersense.PNG`,
    // Additional modal gallery images
    images: [
      `${base}images/fieldsize.PNG`,
      `${base}images/ctrlpanel.PNG`,
      `${base}images/housing.PNG`,
    ],
    link: "https://github.com/rfbazan",
    stack: ["ESP32", "Python", "Flask"],
    detail: {
      problem: "Position tracking data in sports provides a proven competitive advantage for athletes, but is commonly too expensive and impractical to set up for an amateur player",
      solution: "Built a UWB-based trilateration system using ESP32 modules as anchors and a central Python backend to compute and visualize player coordinates in real time. This allowed for users to get all the benefits and precision the pros get, at a fraction of the cost.",
      architecture: "UNDER CONSTRUCTION...",
      challenges: "UNDER CONSTRUCTION...",
      improvements: "UNDER CONSTRUCTION...",
    },
  },
  {
    id: 4,
    title: "NBA Fan App",
    tagline: "Full-stack sports app with the ESPN API feeding live score data.",
    category: "software",
    image: `${base}images/ballerzonly.PNG`,
    // Additional modal gallery images
    images: [
      `${base}images/nbafavs.PNG`,
      `${base}images/feed2.PNG`,
      `${base}images/profile.PNG`,
    ],
    link: "https://github.com/rfbazan",
    stack: ["React", "Node.js", "MySQL"],
    detail: {
      problem: "Existing NBA apps are bloated and ad-heavy. I wanted something that could get me just the scores about the teams I care about.",
      solution: "Built a full-stack app with a React frontend, Node/Express API layer, and MySQL database. Pulls live scores and stats from the ESPN API and lets users save favorites with a persistent account.",
      architecture: "UNDER CONSTRUCTION...",
      challenges: "UNDER CONSTRUCTION...",
      improvements: "UNDER CONSTRUCTION...",
    },
  },
  // {
  //   id: 3,
  //   title: "MIPS Microprocessor",
  //   tagline: "Custom 32-bit CPU built from scratch on an FPGA.",
  //   category: "hardware",
  //   image: "/images/mips-cpu.png",
  //   // Additional modal gallery images
  //   images: [
  //     "/images/zoomleft.PNG",
  //     "/images/alu_fulltest.PNG",
  //     "/images/MIPSvhd.png",
  //   ],
  //   link: "https://github.com/rfbazan",
  //   stack: ["VHDL", "FPGA", "Quartus"],
  //   detail: {
  //     problem: "As part of computer architecture coursework, the goal was to deeply understand CPU design by implementing a working MIPS processor rather than just studying one.",
  //     solution: "Designed and implemented a 32-bit MIPS processor in VHDL, including the ALU, register file, control unit, and a 5-stage pipeline, synthesized and tested on a physical FPGA board.",
  //     architecture: "Five-stage pipeline: IF → ID → EX → MEM → WB. Separate instruction and data memory. Forwarding unit to handle data hazards. Branch prediction defaulting to not-taken.",
  //     challenges: "Handling pipeline hazards — especially load-use hazards — required careful stall and forwarding logic. Debugging on hardware using SignalTap logic analyzer was time-consuming but revealing.",
  //     improvements: "Would add a cache layer, extend the instruction set to include floating point operations, and implement a proper branch predictor with a BTB.",
  //   },
  // }
]