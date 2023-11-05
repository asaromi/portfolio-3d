import {
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  laravel,
  php,
  vuejs,
  firebase,
  mysql,
  postgresql,
  linux,

  bidikkampus,
  bwa,
  gorry,
  kku,
  ordo,
  tav,
  uns,
  myrobin,

  amazon,
} from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Linux Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Web Developer - Intern",
    company_name: "PT. Kusuma Kreasi Utama (Eventkampus)",
    icon: kku,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Feb 2020",
    points: [
      "Designing Database (RDBMS) before developing the website.",
      "Designing Analyzed System when developing the website.",
      "Build some features on the website using Laravel Framework with HTML, Bootstrap, and JavaScript.",
      "Implementing the basics of Git on real project."
    ],
  },
  {
    title: "Lab Assistant",
    company_name: "Sebelas Maret University",
    icon: uns,
    iconBg: "#FFFFFF",
    date: "Feb 2018 - Jan 2021",
    points: [
      "Open Source Class.",
      "Data Structures and Algorithm Class.",
      "Open Source Class.",
      "Software Engineering Class.",
      "Numerical Methods Class.",
    ],
  },
  {
    title: "Backend Developer - Part Time",
    company_name: "Bidik Kampus",
    icon: bidikkampus,
    iconBg: "#383E56",
    date: "May 2021 - Jan 2022",
    points: [
      "Analyze and Design Database with Frontend Developer from UI Design.",
      "Build most of API features for website course (Admin & User side) using NodeJS - Express and PostgreSQL.",
      "Successfully deliver some services flows like: Forgot Password, Course Management, Exercise Flow, Payment Flow (excludes integrated Payment Gateway), etc.",
      "Managing codebase and task with Github and Jira Software. Even though only 2 developers working on the Project."
    ],
  },
  {
    title: "Backend Developer - Part Time",
    company_name: "Ordo",
    icon: ordo,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Mar 2022",
    points: [
      "Design and analyze database structure before developing the website.",
      "Build & maintenance some features on various projects with PHP - Laravel Framework.",
      "Handling Projects : Arts Marketplace, Fresh meats & vegetables Marketplace, etc.",
      "Managing codebase and task with Github and Gitlab.",
    ],
  },
  {
    title: "Junior Fullstack Developer",
    company_name: "PT. Gorry Gourmet Indonesia",
    icon: gorry,
    iconBg: "#FFFFFF",
    date: "May 2022 - Oct 2022",
    points: [
      "Successfully deliver some API features for mobile app using NodeJS - Express and MongoDB.",
      "Successfully deliver some admin features on web using ReactJS - NextJS, Material UI.",
      "Deliver realtime chat features using Firebase - Firestore.",
      "Managing codebase and task with other developers and Product Manager using Github and Trelo.",
    ],
  },
  {
    title: "Laravel Developer - Freelance",
    company_name: "Build With Angga",
    icon: bwa,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jun 2023",
    points: [
      "Successfully deliver some admin features on web course https://buildwithangga.com .",
      "Manage codebase with Git and develop features using Laravel Framework, MySQL/MariaDB, and Bootstrap.",
    ],
  },
  {
    title: "Web Developer Partner - Freelance",
    company_name: "TAV Digital Agency & Production",
    icon: tav,
    iconBg: "#383E56",
    date: "Jul 2022 - Aug 2023",
    points: [
      "Analyzing and Designing Database (RDBMS) before developing the website and deploy to AWS RDS (MariaDB) when already done.",
      "Revamp Website www.fashionagentsaustralia.com with main features.",
      "Develop some API services and integrate latest daily feeds with Instagram API.",
      "Integrate subscribe functionality with Klaviyo.",
      "Implementing responsive design and ensuring cross-browser compatibility with ReactJS - NextJS and TailwindCSS.",
      "Deploying website to AWS EC2 with Nginx reverse proxy.",
    ],
  },
  {
    title: "Fullstack Engineer",
    company_name: "PT. MyRobin Indonesia Teknologi",
    icon: myrobin,
    iconBg: "#FFFFFF",
    date: "Nov 2022 - Present",
    points: [
      "Developing and maintaining web applications and API services for new and existing features.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Using Jira Software that integrate with Github to manage codebase and task.",
      "Implementing responsive design and ensuring cross-browser compatibility with VueJS - NuxtJS and TailwindCSS.",
      "Developing API services with NodeJS - Express and MongoDB.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Zani",
  //   designation: "General Project Manager",
  //   company: "TAV Digital Agency & Production",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "Amazon Clone is a web application that allows users to search for products, add them to their cart, and checkout using Stripe.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "react-redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/asaromi/next-amazon",
    demo_url: "https://next-amazon.pages.dev",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
