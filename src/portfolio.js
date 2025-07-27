

const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lingesh Portfolio",
  description:
    "I’m a final-year MCA student and a passionate front-end developer with 6 months of hands-on experience building responsive, real-world UI projects using React.js.",
  og: {
    title: "Lingesh J Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Lingesh J",
  logo_name: "Lingesh J",
  
  subTitle:
    "I’m a final-year MCA student and a passionate front-end developer with 6 months of hands-on experience building responsive, real-world UI projects using React.js.",

};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/lingesh2215",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lingeshj22/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:lingeshj15@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
];

const skills = {
  data: [
    
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive UI using React.js, Redux Toolkit, Tailwind CSS, and JavaScript",
        "⚡  Creating pixel-perfect layouts with HTML5, CSS3, and responsive design techniques",
        "⚡ Using Git & GitHub for version control and collaboration",
        "⚡ Working with design tools like Figma for converting designs to code",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
 
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
      ],
    },
    
    {
      title: "Adobe Photoshop Design",
      fileName: "DesignImg",
      skills: [
        "⚡ DDesigning visually stunning banners, posters, and digital art for web and print",
        "⚡ Editing and retouching photos to enhance image quality and storytelling",
        "⚡ Optimizing image assets for responsive web and mobile apps",
      ],
      softwareSkills: [
       
      ],
    },
    {
      title: "Sustainability Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Collecting and analyzing greenhouse gas emissions data across operations and facilities",
        "⚡ Preparing sustainability reports aligned with international standards (GHG Protocol)",
        "⚡ Contributing to carbon reduction strategies and environmental compliance",
         "⚡ CSupporting company’s ESG goals through sustainable development initiatives",
      ],
      softwareSkills: [
       
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "Guru Nanak College",
      subtitle: "BCA in Computer Application",
      logo_path: "Guru_logo.png",
      alt_name: "Guru Nanak",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Studied foundational software engineering subjects such as Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡ Completed certifications and workshops in Full Stack Web Development, Cloud Computing, and Data Science, which helped build a strong base for frontend development.",
        "⚡ Received internal recognition and awards for consistent academic performance and participation in tech activities and coding events.",
      ],
      website_link: "https://gurunanakcollege.edu.in/",
    },
    {
      title: "SRM University",
      subtitle: "MCA in Computer Application",
      logo_path: "srm_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Pursuing advanced coursework in Web Development, Cloud Computing, Software Engineering, and Database Systems, with a focus on practical application and real-world projects.",
        "⚡ Developed full-stack applications using React.js, Redux Toolkit, Node.js, Express, MongoDB, and Firebase as part of academic and personal projects.",
        "⚡ Completed a major project titled “WatchNow”, a streaming platform that showcases strong frontend UI/UX and backend integration — built using modern MERN technologies.",
      "⚡ Participated in tech events, workshops, and coding challenges conducted by the university to stay updated with current development trends.",
      ],
      website_link: "https://www.srmist.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Front-End Development",
      subtitle: "DreamDzines",
      logo_path: "DreamDzines_logo.png",
      certificate_link:
        " ",
      alt_name: "DreamDzines",
      color_code: "#2A73CC",
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "Cisco",
      logo_path: "ciso_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1mv79B4x52mtLuLd4HaXVDGAgYGw3sBYP/view?usp=drive_link",
      alt_name: "Cisco",
      color_code: "#00000099",
    },
    {
      title: "Data Science",
      subtitle: "Smartknower",
      logo_path: "Smart_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1joWdhXR5kM8qEJ930y8jfosC9fx8Z-Wf/view?usp=drive_link",
      alt_name: "Smartknower",
      color_code: "#0C9D5899",
    },
    {
      title: "Google IT Support",
      subtitle: "coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1fJc4GsiOQMKeoc0iSpjxwTuwm_wEkdRn/view?usp=drive_link",
      alt_name: "coursera",
      color_code: "#8C151599",
    },
    {
      title: "Configuration Management and the Cloud",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/7f2a77308447eda760ff57edae2c1691",
      alt_name: "Google",
      color_code: "#D83B0199",
    },
    {
      title: "Troubleshooting and Debugging Techniques",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/60bf9816c91c595cb326125ea1859658",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Using Python to Interact with the Operating System",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/fd567f854b82a0339480e1d0925a277c",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Crash Course on Python",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/26785efcfd6bee09c3d8cbb1fccdc335",
      alt_name: "Google",
      color_code: "#FFBB0099",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I’m a passionate Front-End Developer with hands-on experience building responsive and modern web applications using React.js, JavaScript, and Tailwind CSS. Over the past year, I’ve also contributed to sustainability development efforts at ABI-Showatech Pvt. Ltd., supporting environmental reporting through digital tools and data management. My journey includes collaborating on real-world projects, continuous learning, and actively engaging in tech communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have built multiple real-world UI projects using React.js, Redux Toolkit, and modern web technologies. My focus is on creating clean, responsive, and interactive web applications that enhance user experience.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description: "Some of my published Articles, Blogs and Research.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I’m available on most social media platforms and respond within 24 hours. Feel free to reach out regarding React.js, Frontend Development, Portfolio building, or general tech guidance. I’m also open to collaboration on web projects or sustainability-focused tech solutions.",
  },
  blogSection: {
 
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
