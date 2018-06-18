import { IPortfolio } from "./interfaces";
/*
Introduction Page
- Dragons & Diamonds
- Bump Bump Bump
- Gamestrap
- Yuvine VR
- Bug Invaders
*/
const data: IPortfolio = {
  projects: [
    {
      name: "Person",
      title: "Rodrigo Diaz",
      subtitle: "Game Developer/Designer",
      description: `I'm a game developer who loves making new games and working with people. Welcome to my portfolio!`,
      logo_image: require("./img/person.png"),
      component: "ProfileComponent"
    },
    {
      name: "Dragons",
      title: "Dragons & Diamonds",
      subtitle: "Casual Match Game",
      description: `Dragons & Diamonds is a mobile game where you have to connect diamonds to defeat your enemies.`,
      company: { name: `Voony Games - published by Kiloo`, url: ``},
      teamSize: 6,
      role: "Lead Developer",
      details: [
        "Highly engaging position where I had to work in most of the aspects of the game.",
        "Developed the UI and character animations.",
        "Worked on internal tools to help with localization, game design, animations and debugging.",
        "Helped with game and economy balancing by setting up complex systems to analyze and adjust them."
      ],
      images: [
        require("./img/portfolio/DD/dragon_01.jpg")
      ],
      logo_image: require("./img/portfolio/DD.png"),
      component: "DragonsComponent"
    },
    {
      name: "Bump Bump Bump",
      title: "Bump Bump Bump",
      subtitle: "Indie Puzzle Game",
      description: "A minimalist puzzle game about bumping into stuff! An original concept which was made by a small team of game developers from Colombia.",
      company: { name: `Golden Frog Studios`, url: ``},
      teamSize: 4,
      role: "Team Lead",
      details: [
        "Came up with the game concept and designed most of the game.",
        "Experienced the whole game development process.",
        "Led a small team of four people to complete the game.",
        "More than 100,000 players, mostly through web platforms."
      ],
      youtube: "mosVw3X4qYM",
      logo_image: require("./img/portfolio/bumpbumpbump.png"),
      images: [
      ],
      component: "BBBComponent"
    },
    {
      name: "Gamestrap",
      title: "Gamestrap",
      subtitle: "Unity Asset Store Publisher",
      description: "Unity packs currently being sold in the Unity Asset Store that helps game developers design user interfaces by providing them with the resources and tools to make something professional in less time.",
      company: { name: `Gamestrap`, url: ``},
      teamSize: 2,
      role: "Co-creator",
      details: [
        "Created and developed the Unity assets.",
        "Created the videos and tutorials.",
        "Gamestrap UI has around 150 reviews in 5 stars"
      ],
      youtube: "mosVw3X4qYM",
      logo_image: require("./img/portfolio/bumpbumpbump.png"),
      images: [
      ],
      component: "GamestrapComponent"
    },
    {
      name: "Yuvine VR",
      title: "Yuvine VR",
      subtitle: "Product Virtual Presentations",
      description: "A start-up that focuses on visual brilliance in 3D through virtual experiences. The main drive of the company is to create intuitive and outstanding experiences from product presentations to virtual training for web, desktop and mobile platforms.",
      company: { name: `Yuvine VR`, url: ``},
      teamSize: 3,
      role: "Lead Developer",
      details: [
        "Implemented all of the .",
        "Created the videos and tutorials.",
        "Gamestrap UI has around 150 reviews in 5 stars"
      ],
      youtube: "mosVw3X4qYM",
      logo_image: require("./img/portfolio/bumpbumpbump.png"),
      images: [
      ],
      component: "GamestrapComponent"
    },
    {
      name: "Contact",
      title: "Contact me",
      description: "",
      logo_image: require("./img/email-icon.png"),
      component: "ContactComponent"
    }
  ]
};

export default data;
