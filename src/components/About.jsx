import { FaMapMarkerAlt, FaCode, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const highlights = [
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    detail: "Ahmedabad, Gujarat, India",
  },
  {
    icon: FaLaptopCode,
    title: "Primary Role",
    detail: "MERN Stack Developer | React.js Developer",
  },
  {
    icon: FaCode,
    title: "Core Stack",
    detail: "MongoDB, Express.js, React.js, Node.js",
  },

];

const About = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="heading-container" data-aos="fade-up">
        <h2 className="heading">About Me</h2>
        <p className="subheading">
          Passionate React Developer &amp; Frontend Engineer based in Ahmedabad
        </p>
      </div>

      <div className="about-card" data-aos="fade-up" data-aos-duration="800">
        <div className="about-content">
          <p className="about-text">
            Hello! I’m <strong>Divya Koshti</strong>, a passionate <strong>MERN Stack Developer</strong> and <strong>Frontend Developer based in Ahmedabad, Gujarat</strong>.
            I specialize in building responsive and user-friendly web applications using
            <strong> MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>,
            <strong> Node.js</strong>, <strong>JavaScript (ES6+)</strong>, and <strong>Tailwind CSS</strong>.
          </p>

          <p className="about-text">
            I have 6 months of professional experience as a <strong>React Frontend Developer</strong>,
            developing responsive user interfaces, reusable components, integrating RESTful APIs,
            and implementing CRUD operations. I also have foundational knowledge of backend development
            using <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
          </p>

          <p className="about-text">
            I enjoy building full-stack applications, solving real-world problems, and creating
            scalable web solutions with a focus on clean code, performance, accessibility,
            and exceptional user experiences.
          </p>
        </div>

        <div className="about-highlights-grid">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="about-highlight-item">
                <div className="about-highlight-icon-wrapper">
                  <Icon className="about-highlight-icon" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="about-highlight-title">{item.title}</h3>
                  <p className="about-highlight-detail">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
