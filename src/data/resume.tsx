import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ibtihel Chniti",
  initials: "RF",
  url: "https://chaima.vercel.app",
  location: "Tunis, TN",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Full-Stack Developer | Data scraping | Python/Flask, MySQL, Angular",
  summary:
    "Full-stack developer with a Bachelor's in Computer Systems Engineering and proven expertise in building high-performance web applications. Proficient in Python, Angular, Flask, Django, and WordPress, I specialize in advanced data extraction and secure integration systems. My experience spans automated web scraping, database optimization, and scalable deployment using modern tools. Passionate and detail-oriented, I thrive in dynamic, challenging environments and am committed to driving digital innovation.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Flask",
    "Django",
    "Selenium",
    "facebook-scraper",
    "TextBlob",
    "NLTK",
    "Matplotlib",
    "NumPy",
    "RESTful API",
    "Gunicorn",
    "Nginx",
    "MySQL", 
    "Angular",
    "JavaScript", 
    "Typescript", 
    "HTML5", 
    "CSS3", 
    "Bootstrap", 
    "Wordpress",
    "Php",
    "Git&GitHub", 
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ibtihelchniti0@gmail.com",
    tel: "+216 26 190 089",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ibtihelchniti",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ibtihel-chniti-21a6a5238/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Elzei Consulting",
      href: "",
      badges: [],
      location: "On-site",
      title: "Fullstack Web Developer",
      logoUrl: "/elzeiConsulting.png",
      start: "Jan 2024 ",
      end: "Present",
      description: "As a Fullstack Developer at Elzei Consulting, I drive diverse in-house projects—from advanced web scraping and custom WordPress integrations to building scalable, secure applications—ensuring comprehensive digital solutions that propel business growth.",
    },

    {
      company: "Groupe ELAN",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Intern Fullstack Developer",
      logoUrl: "/groupelan.jpg",
      start: "Feb 2023",
      end: "Jun 2023",
      description: "Contributed to a web solution for social media scraping (Facebook) and sentiment analysis using Python and Django."
    },

  ],


  education: [
    {
      school: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse (ISSATSo)",
      href: "https://issatso.rnu.tn",
      degree: "Bachelor’s Degree in Computer Systems Engineering (embedded systems and IoT)",
      logoUrl: "/issatso.jpg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Lycée secondaires de El Alaa - Kairouan",
      href: "https://www.google.com/search?client=opera-gx&q=Lycée+secondaires+de+El+Alaa&sourceid=opera&ie=UTF-8&oe=UTF-8",
      degree: "Mathematics Baccalaureate",
      logoUrl: "",
      start: "2019",
      end: "2020",
    },

  ],



  projects: [
    {
      title: "Job Scraper & WordPress Integrator",
      href: "http://213.130.144.156/",
      dates: "Jan 2024 - jun 2024",
      active: true,
      description: "Engineered a robust solution that automates job offer scraping from multiple sites and seamlessly integrates data into a custom WordPress platform with MySQL. Featuring an Angular-driven configuration interface, LDAP-based security, and nightly cron job automation, this project is deployed on a scalable VPS using Gunicorn and Nginx.",    
  technologies: [
       
        "Python",
        "Flask",
        "Selenium",
        "Angular",
        "MySQL",
        "WordPress",
        "WP Job Manager",
        "Ldap",
        "Gunicorn",
        "Nginx",
      ],
      links: [
        {
          type: "Website",
          href: "http://213.130.144.156/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Frontend",
          href: "https://github.com/ibtihelchniti/frontend_jobScraper",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source Backend",
          href: "https://github.com/ibtihelchniti/backend_jobScraper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/jobScrapDemo.mp4",
    },

    
    {
      title: "Facebook Scraping & Sentiment Analyzer",
      href: "",
      dates: "Feb 2023 - Jun 2023",
      active: true,
      description:
      "Developed a dynamic Django web application that automates Facebook post extraction and sentiment analysis. The solution cleans and preprocesses data, classifies sentiments using TextBlob and NLTK, and visualizes insights through interactive graphs—all within an intuitive interface.",
      technologies: [
        "Python",
        "Django",
        "facebook-scraper",
        "TextBlob",
        "NLTK",
        "Matplotlib",
        "NumPy",
      ],

      image: "",
      video: "/fbScrapDemo.mp4",
    },

    {
      title: "Elzei Consulting Website",
      href: "https://elzei.fr",
      dates: "Jan 2024",
      active: true,
      description: "",
      technologies: [
        "Wordpress",
      ],
      links: [
        {
          type: "Website",
          href: "https://elzei.fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/elzeiConsultingWebsite.png",
      video: "",
    },


    {
      title: "Elzei Portage Website",
      href: "https://elzei-uat.esy.es",
      dates: "Feb 2025",
      active: true,
      description: "",
      technologies: [
        "Wordpress",
      ],
      links: [
        {
          type: "Website",
          href: "https://elzei-uat.esy.es",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/elzeiPortageWebsite.png",
      video:
        "",
    },


    {
      title: "AlWafa Conseil Website",
      href: "https://alwafa-conseil.com",
      dates: "Jan 2024",
      active: true,
      description: "",
      technologies: [
        "Wordpress",
      ],
      links: [
        {
          type: "Website",
          href: "https://alwafa-conseil.com",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/alWafaConseilWebsite.png",
      video:
        "",
    },


  ],


  hackathons: [
   
    {
      title: "Coursera - Introduction to DevOps",
      dates: "Sep 2024",
      location: "",
      description: "Completed the 'Introduction to DevOps' course on Coursera, covering key concepts such as CI/CD, automation, infrastructure as code (IaC), monitoring, and collaboration between development and operations teams.",
      image: "/coursera-logo.png",
      win: "",
      mlh: "",
      links: [
  
      ],
    },


    {
      title: "Machine Learning Bootcamp Certification",
      dates: "Jan 2022", 
      location: "IEEE ISSAT Sousse Student Branch",
      description: "Certified for participating in the Machine Learning Bootcamp Weekend, covering fundamental concepts and practical applications of machine learning.",
      image: "/ieee.jpg", 
      mlh: "",
      links: [
        
      ],
    },

    {
      title: "Microsoft Club Web Development Certification",
      dates: "2021",
      location: "Microsoft ISSAT Sousse Student Club",
      description: "Certified for completing a year-long training on web development fundamentals, including HTML, CSS, and JavaScript, organized by the Microsoft Student Club.",
      image: "/mic.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    },

  ],



  clubs: [

    {
      name: "Microsoft Student Club - ISSAT Sousse",
      description: "",
      logoUrl: "/mic.png",
      start: "2021",
      end: "2023",
      role: "Member",
      /*
      events: [
        {
          title: "AI Hackathon and Prototyping",
          description: "An intensive 36-hour camp focused on innovation, Collaborated with a talented team to develop innovative AI-driven solutions, presenting prototypes to a jury for evaluation and recognition.",
          date: "june 2024",
          image: "/injaz2.jpeg",
          url: "https://www.instagram.com/p/C_VLeoIIpEN/?img_index=1",
        },
      ],
    **/
    }, 

    {
      name: "IEEE Student Branch - ISSAT Sousse",
      description: "",
      logoUrl: "/ieee.jpg",
      start: "2022",
      end: "2023",
      role: "Member",
      
    },

    {
      name: "Google Developer Student Clubs - ISSAT Sousse",
      description: "",
      logoUrl: "/gdsc.png",
      start: "2022",
      end: "2023",
      role: "Member",
      
    },

  ],
} as const;

