/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "M. Anas Hassan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Anas Hassan Portfolio",
    type: "website",
    url: "http://anashassan.com/",
  },
};

//Home Page
const greeting = {
  title: "Anas Hassan",
  logo_name: "AnasHassan",
  nickname: "Software Engineer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/drive/folders/1N2iTsKHL3Fu735NrlzIvS4G2wu4xraZ9",
  portfolio_repository: "https://github.com/anashassan517",
  githubProfile: "https://github.com/anashassan517",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/anashassan517",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anashassan3/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:anashassan517@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP/LLM projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using NextJs, React Native apps",
        "⚡ Creating application backend in Node, Express & Flask",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Chatbots",
      fileName: "Chatbots",
      skills: [
        "⚡ Experience building and training chatbots using large language models (LLMs) like Google Gemini and OpenAI ChatGPT.",
        "⚡ Proficient in designing and implementing chatbot conversation flows for various purposes.",
        "⚡ Skilled in integrating chatbots with different platforms and APIs.",
        "⚡ Experience in fine-tuning LLMs for specific chatbot applications.",
        "⚡ Ability to evaluate and analyze chatbot performance metrics.",
      ],
      softwareSkills: [
        {
          skillName: "Google Gemini",
          fontAwesomeClassname: "simple-icons:google",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "OpenAI ChatGPT",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#007BFF",
          },
        },
        {
          skillName: "Natural Language Processing (NLP)",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Machine Learning (ML)",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "Dialog Management",
          fontAwesomeClassname: "simple-icons:dialogflow",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "APIs (e.g., Dialogflow, Rasa)",
          fontAwesomeClassname: "simple-icons:restapi",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "National University of Computer and Emerging Sciences, FAST-NUCES",
      subtitle: "Bachelor's of Computer Science",
      logo_path: "fast.png",
      // logo_path: "https://nu.edu.pk/Content/images/NU-logo.jpg",
      alt_name: "FAST University",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied software engineering subjects like DS, Algorithms, DBMS, OS, CN, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "http://nu.edu.pk",
    },
    {
      title: "Adamjee Government Science College",
      subtitle: "Pre- Engeneering",
      logo_path: "adamjee.jpeg",
      alt_name: "Adamjee College",
      duration: "2018 - 2020",
      descriptions: ["⚡ Studied Pre-Engeering."],
      website_link:
        "https://en.wikipedia.org/wiki/Adamjee_Government_Science_College",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked with many evolving startups as Web Developer, ML, and Software Engineer. I have also worked with some well established companies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "XGen Technologies",
          company_url: "https://tech",
          logo_path: "xgen.png",
          duration: "Jan 2024 - Present",
          location: "Karachi, Pakistan",
          description: "I am working as a Software Engineer",
          color: "#0879bf",
        },
        {
          title: "Software Engineer Intern",
          company: "Zenkoders",
          company_url: "https://zenkoders.com/",
          logo_path: "zenkoders.jpeg",
          duration: "June 2023 - Sept 2023",
          location: "Karachi, Pakistan",
          description:
            "MERN stack web development is an essential part of my expertise. Additionally, I have experience in implementing RESTful API, which ensures seamless communication between different applications. Collaborative cross-functional teamwork is another strength, as I can work effectively with team members from various backgrounds to achieve common goals.",
          color: "#9b1578",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Guest Relations Head",
          company: "IEEE Society",
          company_url: "https://www.ieee.org//",
          logo_path: "IEEE_logo.png",
          duration: "June 2021 - April 2022",
          location: "Karachi, Pakistan",
          description:
            "Managing guests' experiences. Greeting and checking in guests as they arrive. Ensuring guests have a pleasant experience..",
          color: "#4285F4",
        },
        {
          title: "Guest Relations Head",
          company: "Procom FAST Society",
          company_url: "https://www.procom.live/",
          logo_path: "procom.jpeg",
          duration: "Aug 2022 - Sept 2023",
          location: "Karachi, Pakistan",
          description:
            "Managing guests' experiences. Greeting and checking in guests as they arrive. Ensuring guests have a pleasant experience..",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science, Web, App, ML/DL/CV projects and deploy them.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications/Blogs",
  description: "I have written a few Blogs of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "AI in Breast Cancer Diagnosis ",
      createdAt: "2023-09-06",
      description: "AI in Breast Cancer Diagnosis ",
      url:
        "https://medium.com/@anashassan517/ai-in-breast-cancer-diagnosis-a-rigorous-trial-shows-promise-1bb42764f58a",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Text-to-Image Goes Viral: Meet Craiyon, the DIY DALL·E Sensation ",
      createdAt: "2023-03-06",
      description:
        "Text-to-Image Goes Viral: Meet Craiyon, the DIY DALL·E Sensation ",
      url:
        "https://medium.com/@anashassan517/text-to-image-goes-viral-meet-craiyon-the-diy-dall-e-sensation-322b1ec95409",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_anas.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@anashassan517",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "North Nazimabad Karachi",
    locality: "Karachi",
    country: "PK",
    region: "Sindh",
    postalCode: "75850",
    streetAddress: " ",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps",
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
