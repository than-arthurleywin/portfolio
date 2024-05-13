import React, { useState } from "react";
import "./about.css";

function About() {
  const [showAbout, setShowAbout] = useState(true);
  const [showSkill, setShowSkill] = useState(false);

  const toggleAbout = () => {
    setShowAbout(true);
    setShowSkill(false);
  };

  const toggleSkill = () => {
    setShowAbout(false);
    setShowSkill(true);
  };

  return (
    <>
      <div className="about">
        <div className="cv">
          <div className="cv-img">
            <h4>
              <a
                href="https://drive.google.com/drive/folders/1SWw__eqjYT0VcZ--N2j5SLmKOKjfORK4?hl=id"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            </h4>
          </div>
        </div>
        <div className="about-me">
          <div className="menyalaa">
            <div className="satu">
              <h3
                className={`aboutMe ${showAbout ? "active" : ""}`}
                onClick={toggleAbout}
                style={{ color: showAbout ? "#ffffff9e" : "" }}
              >
                About Me
              </h3>
              <div className={`line ${showAbout ? "active" : ""}`}></div>
            </div>
            <div className="dua">
              {" "}
              <h3
                className={`skill ${showSkill ? "active" : ""}`}
                onClick={toggleSkill}
                style={{ color: showSkill ? "#ffffff9e" : "" }}
              >
                Skill
              </h3>
              <div className={`uline ${showSkill ? "active" : ""}`}></div>
            </div>
          </div>

          <br />
          <div
            className="atas"
            style={{ display: showAbout ? "block" : "none" }}
          >
            <p>
              Hello, I'm Fathir Ramdan Maulani, a Grade 11 Software Engineering
              1 student who has been interested in programming since Grade 10.
              That learning experience led to my interest in web development.
              <br />
              <br />I am also active in the PMR organisation at school, where I
              learned about teamwork and solidarity values. The combination of
              an interest in technology and a passion for helping others has
              formed a strong foundation in my journey as a passionate
              programmer.
            </p>
          </div>
          <div
            className="skil"
            style={{ display: showSkill ? "block" : "none" }}
          >
            <div className="skilll">
              <div className="fe">
                <h4>FrontEnd</h4>
                <br />
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Boostrap</li>
                </ul>
              </div>
              <div className="be">
                <h4>BackEnd</h4>
                <br />
                <ul>
                  <li>PHP</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="uiux">
                <h4>UI/UX</h4>
                <br />
                <ul>
                  <li>Figma</li>
                  <li>Balsamiq</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
