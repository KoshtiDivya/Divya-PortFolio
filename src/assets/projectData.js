import ticTacToe from "../images/projects/tic-tac-toe.png";
import ticTacToe2 from "../images/projects/tic-tac-toe2.png";
import currency from "../images/projects/currencyConverter.png";
import currency2 from "../images/projects/currencyconverter2.png";
import recipe from "../images/projects/foodies.png";
import jio from "../images/projects/jioCinemaclone.png";
import jio2 from "../images/projects/jioCinemaclone2.png";

const projectData = [
  {
    id: 1,
    title: "Tic Tac Toe Game",
    image: [
      ticTacToe,
      ticTacToe2,
      ticTacToe
    ],
    desc: "Developed an interactive Tic Tac Toe game using HTML, CSS, and JavaScript. Implements game logic to handle player turns, win conditions, and draw scenarios. Focused on creating a responsive user interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/KoshtiDivya/Tic-tac-toe-Game"
  },
  {
    id: 2,
    title: "Currency Converter",
    image: [
      currency,
      currency2
    ],
    desc: "Built a currency converter using real-time exchange rate APIs. Allows users to convert currencies instantly with accurate results. Focused on API integration, dynamic UI updates, and user-friendly design.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "API",
     ],
    github: "https://github.com/KoshtiDivya/Currency-Converter"
  },
  {
    id: 3,
    title: "Recipe Website",
    image: [
      recipe
    ],
    desc: "I created a food recipe website 🥗🍕 using React along with HTML, CSS, Bootstrap, and APIs. In this we can enter name of dish and fetch recipe of that dish",
    tech: [
      "React",
      "Bootstrap",
      "JavaScript",
      "API",
    ],
    github: "https://github.com/KoshtiDivya/Foodies_recipe"
  },
  {
    id: 4,
    title: "JioCinema Clone",
    image: [
      jio2,   
      jio,
    ],
    desc: "Developed a JioCinema-inspired movie streaming UI using React and APIs. Implemented search functionality to fetch and display movies dynamically. Focused on responsive design and smooth user experience.",
    tech: [
      "React",
      "CSS",
      "Bootstrap",
      "API",
    ],
    github: "#"
  },
  
];

export default projectData;