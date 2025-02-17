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
        url: "https://www.linkedin.com/in/ibtihel-chniti-21a6a5238/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chaima-ben-salah-a2a20927a/",
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
      title: "Coursera",
      dates: "Jan 2022",
      location: "",
      description: "Introduction to DevOps",
      image: "/gomycode.png",
      win: "",
      mlh: "",
      links: [
  
      ],
    },


    {
      title: "Huawei Certification",
      dates: "May 2023", 
      location: "HCIA - Cloud Computing",
      description: "Certified in Huawei HCIA, covering cloud computing fundamentals, architecture, and deployment using Huawei technologies.",
      image: "/huawei.jpg", 
      mlh: "",
      links: [
        
      ],
    },
    {
      
        title: "9antra Academy",
        dates: "Feb 2024", // Update with the actual date of certification
        location: "Java Programming Certification",
        description: "Certified in Java programming, covering core concepts, object-oriented programming, and application development.",
        image: "/9antra.png", // Add the path to your certification logo if available
        win: "",
        mlh: "",
        links: [
          // Add any relevant links, such as a certificate verification link
        ],
      },
    {
      title: "Udemy",
      dates: "Oct 2024",
      location: "JavaScript Programming: Complete Beginner to Advanced",
      description: "",
      image: "/udemy.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    },

  ],



  clubs: [
    {
      name: "UNICEF Tunisia",
      description: "UNICEF Tunisia is a branch of the United Nations Children's Fund focused on protecting children's rights in Tunisia. It works to ensure access to education, healthcare, and protection, especially for vulnerable groups like migrant children.",
      logoUrl: "/uniceff.png",
      start: "2022",
      end: "2025",
      role: "Member",
      events: [
        {
          title: "Collaboration with the International Organization for Migration (IOM)",
          description: "Organized awareness workshops for migrant families in collaboration with IOM Tunisia, highlighting the importance of education and its positive impact on children. This initiative successfully integrated a group of migrant children into primary schools in Medenine, Zarzis, and Djerba, providing them with essential school supplies.",
          date: "Dec 2024",
          image: "/unicefevent.png",
          url:"https://www.instagram.com/p/DDuflP-x8Z3/?img_index=1",
        },
        {
          title: "Showcasing the Second Chance Program",
          description: "A transformative initiative aimed at supporting adolescents who have dropped out of school, empowering them to reintegrate into education and society. The event also featured a powerful expressive dance performance on addiction, presented by the Civic Education Club of the Second Chance School in Bab El Khadhra, showcasing the importance of awareness and resilience.",
          date: "April 2024",
          image: "/unicef2.png",
          url:"https://www.instagram.com/p/C6MbbWLLFDR/?img_index=1",
        },
      ],
    },
    {
      name: "Polygon",
      description: "Polygon University is the only private university accredited by the Tunisian Ministry of Higher Education and Scientific Research for its 100% online courses.",
      logoUrl: "/polygon.jpg",
      start: "2023",
      end: "2024",
      role: "Member",
      events: [
        {
          title: "AI Hackathon and Prototyping",
          description: "An intensive 36-hour camp focused on innovation, Collaborated with a talented team to develop innovative AI-driven solutions, presenting prototypes to a jury for evaluation and recognition.",
          date: "june 2024",
          image: "/injaz2.jpeg",
          url: "https://www.instagram.com/p/C_VLeoIIpEN/?img_index=1",
        },
      ],
    },

    {
      name: "Injaz",
      description: "INJAZ Tunisia is an organization inspires and prepares young people to succeed in the global economy by offering hands-on programs and training in entrepreneurship, business skills, and workforce readiness.",
      logoUrl: "/injaz.png",
      start: "2023",
      end: "2024",
      role: "Member",
      events: [
        {
          title: "Local Company Program Competition",
          description: "Participated in the Local Company Program competition, collaborating with teams in a competitive and inspiring environment. The event focused on innovation, business solutions, and team collaboration, with the winning teams moving on to represent ISCAE at the national INJAZ competition.",
          date: "Feb 2024",
          image: "/injaz3.png",
          url: "https://www.instagram.com/p/C32ik-no3Cc/?img_index=7",
        }
      ],
    },

  ],
} as const;

