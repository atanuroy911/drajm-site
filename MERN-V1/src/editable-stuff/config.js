// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dr Ata",
  middleName: "Jahangir",
  lastName: "Moshayedi",
  message: " Always stay hungry for knowledge ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/drajm",
    },
    {
      image: "fa-google",
      url: "https://scholar.google.com/citations?user=nLz_vcoAAAAJ&hl=en",
    },
    {
      image: "fa-weixin",
      url: "Dr_AJM",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dr-ata-jahangir-moshayedi-85085b83/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/drajm/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/drajm.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/drajm.jpeg"),
  imageSize: 375,
  message:
    "I am Dr. Ata Jahangir Moshayedi. I have done my PhD. in Electronic Science from Savitribai Phule Pune University, India( 2015). I have been a member of various Societies like IEEE, Instrument Society of India as a Life Member, Lifetime Member of Speed Society of India, and editorial team of various conference and journals. My research interest includes Robotics and Automation, Sensor modelling ,Bio-inspired robots, Mobile Robot Olfaction, Plume Tracking, Embedded System, Machine vision-based Systems, Virtual reality and  Artificial Intelligence.",
  resume: "https://drive.google.com/file/d/1hoJeCQRXU1iaR0_ELtADnEXmRjlLI7dH/view?usp=share_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "drajm", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "I will never forget my first lecture in 2009 at the same university where I earned my BE and role as a lecturer. Even I never thought my university would nominate me in 2020. I have participated in over 15 matches, had a respectable ranking, and completed 15 research projects. I have published 2 books, attained 7 Copyrights and 3 Patents, and have several tutorials and classes online (YouTube).I love to travel and learn hence, my journeys across several countries. I want to spread education among my students so that they can truly utilize them no matter how much they kill me in the process to do it.",
  images: [
    { 
      img: require("../editable-stuff/AboutLogo.jpeg"), 
      label: "2019 6th ICISCE Shanghai", 
      paragraph: "International Conference on Information Science and Control Engineering" 
    },
    { 
      img: require("../editable-stuff/robotshow.jpg"), 
      label: "Service Robot Demonstration at RARL", 
      paragraph: "Best Paper award for this robot in 2019 in China" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "Arduino", value: 95 },
    { name: "Robotics", value: 85 },
    { name: "App Development", value: 65 },
    { name: "MATLAB", value: 90 },
    { name: "AutoCAD", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Unity", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you need & feel to collaborate feel free to get in touch at",
  email: "ajm@jxust.edu.cn",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Associate Professor',// Here Add Company Name
      companylogo: require('../assets/img/jxust_rarl.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Research Guide',
      companylogo: require('../assets/img/iau.jpg'),
      date: 'May 2014 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
