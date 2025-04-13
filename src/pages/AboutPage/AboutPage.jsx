import { Link } from "react-router-dom";
import styles from "./AboutPage.module.css";
import profilePic from "../../assets/images/MariahLinkedin.png";
/* import { NavLink } from "react-router-dom"; */


const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About This Project</h1>

      <p className={styles.paragraph}>
        This app was created as a hands-on learning project to help me grow as a full stack developer. 
        It brings together everything I’ve been studying — from React components and state management to real backend integration.
      </p>

      <p className={styles.paragraph}>
        While developing this project, I focused on writing clean, modular code and applying best practices in modern web development.
      </p>

      <h2 className={styles.subtitle}>⚙️ Tech Stack</h2>
      <ul className={styles.list}>
        <li><strong>Frontend:</strong> React (Hooks), React Router, CSS Modules</li>
        <li><strong>Backend:</strong> Custom API with JSON Server, Express, Sharp, and file handling - RESTful API from Ironhack Course (Berlin)</li>
      </ul>

      <h2 className={styles.subtitle}>👩‍💻 About Me</h2>

      <div className={styles.aboutSection}>
        <img
          src={profilePic}
          alt="Mariah's Avatar"
          className={styles.profileImage}
        />
        <div>
          <p className={styles.paragraph}>
            I&apos;m Mariah, a Brazilian designer and full stack web development junior based in Berlin.
            I&apos;m passionate about creating digital experiences that are both beautiful and functional.
          </p>
          <p className={styles.paragraph}>
            My background in Design and Education helps me approach tech projects with empathy,
            structure, and creativity. I&apos;m currently focused on JavaScript, React, TypeScript, and backend logic with NodeJS, Express, Prisma, Mongoose, PostgreSQL.
          </p>

          <h2 className={styles.subtitle}>⚙️ Tech Stack</h2>
          <ul className={styles.list}>
            <li>
              <strong>Frontend:</strong>React (Hooks, Context API) • TypeScript • React Router • Tailwind CSS • CSS Modules • Flowbite React • Vite
            </li>
            <li>
              <strong>Backend:</strong> Express.js (TypeScript) • Implement RESTful APIs • MongoDB • PostgreSQL
              
            </li>
            <li>
              <strong>Database:</strong>  MongoDB • PostgreSQL (Prisma ORM) 
            </li>
            <li>
              <strong>Auth & Security:</strong> (Not implemented in this project)
            </li>
            <li>
              <strong>Dev Tools:</strong> Prisma • Nodemon • dotenv • Morgan • Git & GitHub •
              ESLint & Prettier  • Thunder Client (for API testing) . VSCode • Netlify • Vercel
            </li>
          </ul>

          <div className={styles.socialLinks}>
            <p>Connect with me on:</p>
            <div className={styles.buttonGroup}>
              <a
                href="https://www.linkedin.com/in/mariahgraumann-fullstackwebdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinButton}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Mah30"
                target="_blank"               
                rel="noopener noreferrer"
                className={styles.githubButton}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backHome}>
        <Link to="/">⬅ Back to Home</Link>
      </div>
    </div>
  );
};

export default AboutPage;
