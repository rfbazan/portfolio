// src/data/experience.js
const base = import.meta.env.BASE_URL

export const experiences = [
  {
    id: 1,
    company: 'ITC Holdings',
    role: 'Associate Engineer I',
    dates: 'August 2026 – Present',
    hook: 'Helping my team deliver more accurate results, faster, by automating slow manual work.',
    stack: ['Automation', 'Python', 'SQL'],
    bullets: [
      'Built several Python programs that interact with our databases, automating tasks that used to take hours.',
      'Created a Python GUI tool that turns a 10-step Windows workflow for new settings into one click for our 10-person group.',
      'Now building Python wrappers around our predefined SQL queries so engineers can use them more easily.',
    ],
    logo: `${base}images/ITC.png`,
    link: 'https://www.itc-holdings.com',
  },
  {
    id: 2,
    company: 'ITC Holdings',
    role: 'Relay Design Intern',
    dates: 'May 2025 – August 2025',
    hook: 'Learned from experienced engineers while improving the data behind our grid simulations.',
    stack: ['Python', `Data Verification`],
    bullets: [
      'Developed a Python program that highlighted discrepancies between field data and the data we use to simulate the grid.',
      'Helped correct those discrepancies, so our simulations now run on more accurate data.',
    ],
    logo: `${base}images/ITC.png`,
    link: 'https://www.itc-holdings.com',
  },
  {
    id: 3,
    company: 'Paradox Security Systems',
    role: 'Software Test Engineer Intern',
    dates: 'May 2024 – August 2024',
    hook: 'Stress-tested security software to keep it bug-free and secure.',
    stack: ['SQL', 'QA'],
    bullets: [
      "Frequently worked on the companion app that connected to users' security devices, like cameras and motion detectors.",
      'Worked across teams to identify and resolve software issues in deployed products.',
    ],
    logo: `${base}images/paradox.png`,
    link: 'https://www.paradox.com',
  },
]