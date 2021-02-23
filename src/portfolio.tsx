/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  username: "Gabriel Roberge",
  title: "Hello Everybody, this is Gabriel",
  subTitle: emoji(
    "A passionate Full Stack Softfare Engineering student 🚀I'm currently at the end of my 2nd year at École de Technologie Supérieure in Montréal. I have experience working with Typescript / Javascript / ReactJS/ NodeJS and a lot more."
  ),
  resumeLink: "",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GRob27",
  linkedin: "https://www.linkedin.com/in/gabriel-roberge-js/",
  gmail: "gabroberge27@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "https://www.instagram.com/gabroberge27/",
  twitter: "https://twitter.com/Theqcwarrior",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO DECIDE WHAT I LIKE THE MOST",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / GCP / AWS "
    ),
    emoji("⚡ Creating powerful mysql database's using TypeOrm"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "discordjs",
      fontAwesomeClassname: "fab fa-discord",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fa fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fa fa-fire",
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fab fa-google",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "École de Technologie Supérieure",
      logo:
        "https://lh5.googleusercontent.com/-t17Q4NdtsAg/AAAAAAAAAAI/AAAAAAAAAAA/dqOn8BkfJoQ/s66-p-k-no-ns-nd/photo.jpg",
      subHeader: "B.Eng. in Software engineering",
      duration: "September 2019 - April 2023",
      desc: "",
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "72%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%",
    },
    {
      Stack: "Programming",
      progressPercentage: "85%",
    },
    {
      Stack: "MySql",
      progressPercentage: "70%",
    },
    {
      Stack: "Typescript",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developpement Intern",
      company: "Nter Technologies ",
      companylogo:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQEoLYABm59m1w/company-logo_200_200/0/1519921439266?e=1622073600&v=beta&t=JM_c-nTq--W8Woj_qgYH93vBk4g51Tng5Lt_3nHasXI",
      date: "May 2021 - August 2021",
      desc: "My future internship at the end of this semester 💪",
      descBullets: [],
    },
    {
      role: "Field Technician",
      company: "Bell Technical Solutions",
      companylogo:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHBbLw9SaimAA/company-logo_200_200/0/1519856561321?e=1622073600&v=beta&t=T-Q38J3M6g567B9mQ2en4t8KO7qhaswoX9B7jX6xH-E",
      date: "April 2019 – Present",
      desc:
        "Connecting Canadians to High Speed Internet and Helping Further Deploy Fiber Optics Network",
    },
    {
      role: "Web Developpement Intern",
      company: "Trisotech",
      companylogo:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQGbEu7ZZHG86g/company-logo_200_200/0/1582733562887?e=1622073600&v=beta&t=7Nn_BqjY3RwIhFyaLVZ7MSinWboNF8XO3StU0AFUkEQ",
      date: "April 2020 - August 2020",
      desc: emoji(
        "I've solo created a translation plugin incorporated in the company's main program 🔥"
      ),
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Grob27", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
      image: "",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
      image: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
      image: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to connect? Message me on my email or at any of the following links 😃.",
  number: "",
  email_address: "gabroberge27@gmail.com",
  display: false
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
