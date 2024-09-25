import GirlImage2 from "../assets/girl2.png";
import Mouse from "../assets/mouse.png";
import ArrowDown from "../assets/arrow-down.png";
import PaintBrush from "../assets/paint-brush.png";
import Technology from "../assets/technology.png";
import ResponsiveImage from "../assets/responsive.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/java-script.png";
import Reactjs from "../assets/React-js.png";
import Git from "../assets/git.png";
import { MdNavigation } from "react-icons/md";
import IIMT from "../assets/iimt.jpeg";
import School from "../assets/school.jpeg";
import Envelope from "../assets/mail.png";
import { motion } from 'framer-motion';
import { Tilt } from "react-tilt";
import Resume from "../assets/HARSH-BISLA-RESUME 2 (3).pdf";
import Github from "../assets/github.jpeg";
import Bootstrap from "../assets/bootstarp.png";
import ECommerce from "../assets/bg.webp";
import Spotify from "../assets/spotify.jpeg";
import Weather from "../assets/weather2.webp";
import TextUtils from "../assets/textutils.png";
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import Boy from "../assets/boy.png";
import Particlebackground from "./ParticleBackground";
import AboutBoy from "../assets/aboutBoy.png"

function Home() {
    const skills = [
        { Name: "HTML5", imgSrc: Html },
        { Name: "CSS3", imgSrc: Css },
        { Name: "Javascript", imgSrc: Javascript },
        { Name: "React Js", imgSrc: Reactjs },
        { Name: "Bootstrap", imgSrc: Bootstrap },
        { Name: "Git", imgSrc: Git },
        { Name: "Github", imgSrc: Github }
    ];

    const Projects = [
        { Name: "E-Commerce Website", Link: "https://online-shopping-e.vercel.app/", Description: "Functional E-Commerce Website", imgSrc: ECommerce },
        { Name: "Spotify Clone", Link: "http://postifyyy.freewebhostmost.com/", Description: "Spotify Functional Clone", imgSrc: Spotify },
        { Name: "Weather App", Link: "https://harsh-bisla.github.io/Weather-App/", Description: "Provides Real Time Weather", imgSrc: Weather },
        { Name: "Text Utils", Link: "https://harsh-bisla.github.io/TextUtils/", Description: "Manipulate Your Text", imgSrc: TextUtils }
    ];

    const [ref, inView] = useInView({
        rootMargrin: '-75%'
    });
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
    const [ref5, inView5] = useInView();
    const [ref6, inView6] = useInView();

    return (
        <>
            <section id="homeSection" className="home">
                <Particlebackground />
                <div className="Intro">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hi, I'm Harsh <span>Bisla</span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        I'm <span> Frontend Web Developer</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        I Create intuitive and dynamic web applications, focusing on user experience and innovative design. Let's bring ideas to life!
                    </motion.p>
                    <Link to="contactSection" smooth={true} duration={1000}>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="contact-btn"
                        >
                            Contact Me
                        </motion.button>
                    </Link>
                </div>

                <Tilt
                    className="tilt-container"
                    options={{
                        max: 30,
                        scale: 1,
                        speed: 2000,
                    }}
                    style={{ height: 200, width: 200 }}
                >
                    <div className="tilt-content">
                        <motion.img
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="intro-image"
                            width={390}
                            src={Boy}
                            alt="girlImage"
                        />
                    </div>
                </Tilt>

                <div className="icons">
                    <a href="https://www.linkedin.com/in/harshbisla78" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Harsh-Bisla" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </section>

            <div className="scroll-down">
                <motion.div
                    // ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mouse"
                >
                    <img width={35} src={Mouse} alt="mouse" />
                    <p>Scroll Down</p>
                    <img className="arrow-down" width={22} src={ArrowDown} alt="arrow down" />
                </motion.div>
            </div>

            {/* About Section */}
            <section id="aboutSection" className="About">
                <motion.div
                    ref={ref5}
                    initial={{ opacity: 0, x: -60 }}
                    animate={inView5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                    transition={{ duration: 0.5 }}
                    className="about-image"
                >
                    <img width={330} src={AboutBoy} alt="GirlIMage2" />
                </motion.div>
                <motion.div
                    ref={ref5}
                    initial={{ opacity: 0, x: 60 }}
                    animate={inView5 ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                    transition={{ duration: 0.5 }}
                    className="about-text"
                >
                    <h2>Let Me Introduce <span>Myself</span></h2>
                    <p>
                        I'm a passionate Frontend Web Developer with a strong focus on creating intuitive, user-friendly interfaces. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I build responsive and visually appealing websites. I enjoy solving complex problems, improving web performance, and bringing designs to life with clean, efficient code. Constantly learning and staying updated with the latest trends. In my work, I prioritize attention to detail, performance optimization, and cross-browser compatibility.
                    </p>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="contact-btn"
                        >
                            Download CV
                        </motion.button>
                    </a>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skillSection" className="skills">
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    Skills and <span>Abilities</span>
                </motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    id="main-p"
                >
                    I Like To Craft Beautiful And Scalable Web Products
                </motion.p>

                <div className="skills-container">
                    <div className="skills-text-container">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="skill-logo"
                        >
                            <img src={PaintBrush} alt="PaintBrush" />
                            <div className="skills-text">
                                <h3>Design + development</h3>
                                <p>Clean, modern designs - optimized for performance, search engines, and converting users to customers.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="skill-logo"
                        >
                            <img src={Technology} alt="PaintBrush" />
                            <div className="skills-text">
                                <h3>Technology</h3>
                                <p>Combined all the latest technologies to a progressive website.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="skill-logo"
                        >
                            <img src={ResponsiveImage} alt="PaintBrush" />
                            <div className="skills-text">
                                <h3>Always Responsive</h3>
                                <p>A responsive design makes your website accessible to all users, regardless of their device.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="skills-box">
                        {skills.map((skill, index) => {
                            return (
                                <motion.div
                                    ref={ref6}
                                    key={index}
                                    className="box"
                                    initial={{ opacity: 0 }}
                                    animate={inView6 ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <img width={40} src={skill.imgSrc} alt="SkillImage" />
                                    <p>{skill.Name}</p>
                                </motion.div>
                            )
                        }

                        )}

                    </div>
                </div>
            </section>

            <section id="projectSection" className="projects-section">

                <h2>
                    Projects <span>Done</span>
                </h2>
                <div className="project-container">
                    {Projects.map((project, index) =>
                        <div key={index}
                            className="project-box"
                        >
                            <Tilt
                                options={{
                                    max: 45,
                                    scale: 1,
                                    speed: 2000,
                                }}
                                style={{ height: 200, width: 200 }}
                            >
                                <div className="image-box">
                                    <img height={190} width={300} src={project.imgSrc} alt="" />
                                    <a href={project.Link} target="_blank" rel="noopener noreferrer">
                                        <div className="link">Visit <MdNavigation /></div>
                                    </a>
                                </div>
                            </Tilt>
                            <h3>{project.Name}</h3>
                            <p>{project.Description}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Education Section */}
            <section id="educationSection" className="education-section">
                <motion.h2
                    ref={ref3}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    My <span>Education</span>
                </motion.h2>
                <div className="education-container">
                    <motion.div
                        ref={ref3}
                        className="education-box"
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img width={60} src={IIMT} alt="Logo" />
                        <div className="education-text">
                            <h4>IIMT University Meerut</h4>
                            <p><span>2022-2024</span></p>
                            <p>Bachelor of Computer Applications (BCA)</p>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        className="education-box"
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img width={60} src={School} alt="Logo" />
                        <div className="education-text">
                            <h4>Dev Memorial Public School</h4>
                            <p><span>2021-2022</span></p>
                            <p>Completed 12th</p>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        className="education-box"
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img width={60} src={School} alt="Logo" />
                        <div className="education-text">
                            <h4>Dev Memorial Public School</h4>
                            <p><span>2019-2020</span></p>
                            <p>Completed 10th</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="contactSection" className="contact">
                <motion.img
                    ref={ref4}
                    className="envelope"
                    width={80}
                    src={Envelope}
                    alt="envelopeImage"
                    initial={{ opacity: 0 }}
                    animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.h1
                    ref={ref4}
                    initial={{ opacity: 0, y: -50 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <span>Subscribe</span> To Get More Updates
                </motion.h1>
                <p>Join our subscriber list to get more updates and wonderful information</p>
                <div className="input">
                    <motion.input
                        ref={ref4}
                        type="text"
                        placeholder="Enter your email"
                        initial={{ opacity: 0 }}
                        animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.button
                        ref={ref4}
                        className="subscribe-btn"
                        initial={{ opacity: 0 }}
                        animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Subscribe
                    </motion.button>
                </div>
            </section>
        </>
    );
}

export default Home;
