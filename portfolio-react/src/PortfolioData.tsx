import { IPortfolio } from "./interfaces";

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
      title: "Dragons and Diamonds",
      subtitle: "Casual Match Game",
      description: "",
      logo_image: require("./img/portfolio/DD.png"),
      component: "DragonsComponent"
    },
    {
      name: "Bump Bump Bump",
      title: "Bump Bump Bump",
      subtitle: "Puzzle Game",
      description: "",
      youtube: "mosVw3X4qYM",
      logo_image: require("./img/portfolio/bumpbumpbump.png"),
      images: [
        require("./img/portfolio/BBB/bbb_01.jpg"),
        require("./img/portfolio/BBB/bbb_02.jpg"),
        require("./img/portfolio/BBB/bbb_03.jpg")
      ],
      component: "BBBComponent"
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
