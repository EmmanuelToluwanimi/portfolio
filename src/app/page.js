import Image from 'next/image'

export default function Home() {
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">A~T</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onclick="toggleMenu()">
            <span />
            <span />
            <span />
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onclick="toggleMenu()">
                About
              </a>
            </li>
            <li>
              <a href="#experience" onclick="toggleMenu()">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onclick="toggleMenu()">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onclick="toggleMenu()">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/profilebg.png" alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I&apos;m</p>
          <h1 className="title">Amusan Toluwanimi</h1>
          <p className="section__text__p2">Software Engineer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onclick="window.open('./assets/emmanueltoluwanimi_cv.pdf')"
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onclick="location.href='https://linkedin.com/in/emmanueltoluwanimi'"
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              className="icon"
              onclick="location.href='https://github.com/emmanueltoluwanimi'"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="./assets/profilebg.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  3+ years <br />
                  Software Engineering
                </p>
              </div>
              <div className="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  Professional Certificate
                  <br />
                  Software Engineering
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                I am a seasoned Software Engineer with over three years of expertise in web application development. My skills
                encompass front-end development using HTML, CSS, and JavaScript frameworks, complemented by back-end
                proficiency in Node.js, and database management with MySQL and MongoDB. Throughout my career, I have
                consistently delivered high-quality code across a spectrum of projects, ranging from e-commerce platforms and
                social media applications to enterprise-level solutions.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    {/* <p>Experienced</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    {/* <p>Experienced</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SASS</h3>
                    {/* <p>Intermediate</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    {/* <p>Basic</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    {/* <p>Basic</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Tailwind CSS</h3>
                    {/* <p>Intermediate</p> */}
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p></p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    {/* <p>Intermediate</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    {/* <p>Intermediate</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git/Github</h3>
                    {/* <p>Intermediate</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>GraphQL</h3>
                    {/* <p>Intermediate</p> */}
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>MongoDB</h3>
                    {/* <p>Intermediate</p> */}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/swipetel.png"
                  alt="swipetel.png"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                SwipeTelecom
              </h2>
              <div className="btn-container">
                {/* <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button> */}
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://www.swipetelecom.com.ng/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/ayolawal.png"
                  alt="ayo lawal"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Ayo Lawal Design</h2>
              <div className="btn-container">
                {/* <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button> */}
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://www.ayolawal.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/aura.png"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Aura by Transcorphotels
              </h2>
              <div className="btn-container">
                {/* <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button> */}
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://aura.transcorphotels.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#contact'"
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:emmanueltoluwanimi01@gmail.com">emmanueltoluwanimi01@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/emmanueltoluwanimi">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright © 2023 Amusan T. Emmanuel. All Rights Reserved.</p>
      </footer>
    </>

  )
}
