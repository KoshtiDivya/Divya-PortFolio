import ticTacToe from "../images/projects/tic-tac-toe.png";
import ticTacToe2 from "../images/projects/tic-tac-toe2.png";
import currency from "../images/projects/currencyConverter.png";
import currency2 from "../images/projects/currencyconverter2.png";
import recipe from "../images/projects/foodies.png";
import jio from "../images/projects/jioCinemaclone.png";
import jio2 from "../images/projects/jioCinemaclone2.png";
import sps from "../images/projects/sps.png"
import sps2 from "../images/projects/sps2.png"
import expense1 from "../images/projects/expense1.png"
import expense2 from "../images/projects/expense2.png"
import doclix1 from "../images/projects/doclix1.png";
import doclix2 from "../images/projects/doclix2.png";
import chatApp1 from "../images/projects/chat1.png";
import chatApp2 from "../images/projects/chat2.png";

const projectData = [
  {
    id: 1,
    title: "SweetTalk - Realtime Chat App",
    image: [chatApp1, chatApp2],
    desc: [
      "Developed a real-time chat application that allows users to communicate instantly through a clean and responsive interface.",
      "Implemented user authentication and secure login functionality for personalized conversations.",
      "Designed modern chat screens with smooth navigation and mobile-friendly layouts.",
      "Focused on improving user experience with responsive design and intuitive interactions.",
      "Built the project to simulate real-world messaging platforms and strengthen frontend development skills."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind", "Responsive Design"],
    github: "https://github.com/KoshtiDivya/SweetTalk---Chat-app"
  },

  {
    id: 2,
    title: "Doclix - Doctor Appointment Application",
    image: [doclix1, doclix2],
    desc: [
      "Created a doctor appointment booking system that helps patients schedule consultations online.",
      "Designed separate sections for doctors and patients to improve usability and organization.",
      "Implemented appointment management features for booking, viewing, and tracking appointments.",
      "Focused on creating a responsive and user-friendly interface for all device sizes.",
      "Developed the project to simplify healthcare appointment management through technology."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT",  "Tailwind", "Payment Integration"],
    github: "https://github.com/KoshtiDivya/Doclix_appointment_booking"
  },

  {
    id: 3,
    title: "Expense Tracker",
    image: [expense1, expense2],
    desc: [
       "Developed an expense tracking application to manage daily income and expenses efficiently.",
       "Implemented transaction management with automatic balance, income, and expense calculations.",
       "Stored all transaction data in Local Storage to ensure data persistence across browser sessions.",
       "Integrated jsPDF functionality to generate and download transaction history reports in PDF format.",
       "Focused on responsive design, clean UI, and an intuitive user experience."
    ],
    tech: ["HTML", "CSS", "JavaScript", "JsPDF"],
    github: "https://github.com/KoshtiDivya/Expence-Tracker-Website"
  },

  {
    id: 4,
    title: "Currency Converter",
    image: [currency, currency2],
    desc: [
      "Developed a currency converter using real-time exchange rate APIs for accurate conversions.",
      "Allows users to convert currencies instantly between multiple international currencies.",
      "Integrated API data to provide up-to-date exchange rates and conversion results.",
      "Designed a simple and intuitive user interface for seamless interaction.",
      "Focused on API integration, dynamic updates, and responsive design principles."
    ],
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "https://github.com/KoshtiDivya/Currency-Converter"
  },

  {
    id: 5,
    title: "Recipe App",
    image: [recipe],
    desc: [
      "Created a recipe search application that fetches food recipes using external APIs.",
      "Users can search for their favorite dishes and instantly view recipe details.",
      "Implemented dynamic data fetching and rendering for a smooth user experience.",
      "Designed responsive layouts using React and Bootstrap components.",
      "Focused on API integration and building an engaging food discovery platform."
    ],
    tech: ["React", "Bootstrap", "JavaScript", "API Integration"],
    github: "https://github.com/KoshtiDivya/Foodies_recipe"
  },

  {
    id: 6,
    title: "JioCinema Clone",
    image: [jio2, jio],
    desc: [
      "Developed a JioCinema-inspired movie streaming interface using React and APIs.",
      "Implemented movie search functionality to fetch and display content dynamically.",
      "Designed responsive layouts similar to modern OTT streaming platforms.",
      "Focused on smooth navigation, user experience, and attractive UI design.",
      "Built the project to gain hands-on experience with React and API integration."
    ],
    tech: ["React", "CSS", "Bootstrap", "API Integration"],
    github: "https://github.com/KoshtiDivya/Jio-cinema-clone"
  },

  {
    id: 7,
    title: "Tic Tac Toe Game",
    image: [ticTacToe, ticTacToe2],
    desc: [
      "Developed an interactive Tic Tac Toe game using HTML, CSS, and JavaScript.",
      "Implemented game logic for player turns, win detection, and draw conditions.",
      "Designed a responsive interface that works smoothly across different devices.",
      "Focused on improving problem-solving skills through game development concepts.",
      "Built the project to strengthen understanding of JavaScript DOM manipulation."
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/KoshtiDivya/Tic-tac-toe-Game"
  },

  {
    id: 8,
    title: "Stone Paper Scissors Game",
    image: [sps, sps2],
    desc: [
      "Created an interactive Stone Paper Scissors game using HTML, CSS, and JavaScript.",
      "Implemented game logic to determine winners and update scores dynamically.",
      "Designed engaging visuals and animations to enhance user interaction.",
      "Focused on responsive design and smooth gameplay experience.",
      "Built the project to practice JavaScript event handling and logical operations."
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/KoshtiDivya/Stone-paper-scissors"
  }
];

export default projectData;
