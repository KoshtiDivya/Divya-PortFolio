import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const projects = [
  {
    id: 1,
    title: "SweetTalk - Realtime Chat App",
    desc: "Developed a real-time chat application with instant messaging, user authentication, and responsive UI using React, Node.js, Express.js, and MongoDB.",
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind"]
  },
  {
    id: 2,
    title: "Doclix - Doctor Appointment Application",
    desc: "Created a doctor appointment booking system helping patients schedule consultations online with user-friendly responsive management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind"]
  },
  {
    id: 3,
    title: "Expense Tracker",
    desc: "Developed an expense tracking application with daily income/expense calculations, Local Storage persistence, and jsPDF report generation.",
    tech: ["HTML", "CSS", "JavaScript", "JsPDF"]
  },
  {
    id: 4,
    title: "Currency Converter",
    desc: "Developed a real-time currency converter using live exchange rate APIs for accurate international conversions with dynamic UI.",
    tech: ["HTML", "CSS", "JavaScript", "API Integration"]
  },
  {
    id: 5,
    title: "Recipe App",
    desc: "Created a recipe search application fetching external APIs with dynamic recipe details, responsive layouts, and modern UI.",
    tech: ["React", "Bootstrap", "JavaScript", "API Integration"]
  },
  {
    id: 6,
    title: "JioCinema Clone",
    desc: "Developed a movie streaming UI clone using React and movie APIs with modern OTT-style responsive layouts and dynamic search.",
    tech: ["React", "CSS", "Bootstrap", "API Integration"]
  },
  {
    id: 7,
    title: "Tic Tac Toe Game",
    desc: "Developed an interactive Tic Tac Toe web game with win detection, draw logic, and responsive DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 8,
    title: "Stone Paper Scissors Game",
    desc: "Created an interactive Stone Paper Scissors browser game with dynamic score tracking, logic operations, and engaging visuals.",
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

function prerender() {
  const indexHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  projects.forEach((proj) => {
    const projDir = path.join(distDir, "project", String(proj.id));
    if (!fs.existsSync(projDir)) {
      fs.mkdirSync(projDir, { recursive: true });
    }

    const pageTitle = `${proj.title} | Divya Koshti - React Developer Portfolio`;
    const pageDesc = `${proj.desc} Developed by Divya Koshti using ${proj.tech.slice(0, 4).join(", ")}.`;
    const canonicalUrl = `https://divyakoshti.netlify.app/project/${proj.id}`;

    let html = baseHtml;

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);

    // Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${pageDesc}" />`
    );

    // Replace Canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${pageTitle}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${pageDesc}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Replace Twitter Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${pageTitle}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${pageDesc}" />`
    );

    fs.writeFileSync(path.join(projDir, "index.html"), html, "utf-8");
    console.log(`Prerendered: /project/${proj.id}`);
  });

  console.log("All static project routes successfully prerendered for SEO!");
}

prerender();
