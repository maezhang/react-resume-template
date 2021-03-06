import React, { Component } from "react";
import styled from "@emotion/styled";

const SkillContainer = styled.div`
  display: flex;
`;

const CodeSkillContentCSS = styled.ul`
  padding-right: 15px;
  flex-basis: 50%;
`;

const WebSkillContentCSS = styled.ul`
  padding-left: 15px;
  flex-basis: 50%;
`;

class Resume extends Component {
  render() {
    if (this.props.data) {
      // var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        let description = <p>{work.description}</p>;
        if (work.company === "University of Arizona") {
          description = (
            <span>
              {description}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/31754553/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to read the paper
              </a>
            </span>
          );
        }
        if (work.company === "SupportChef") {
          description = (
            <span>
              {description}
              <a
                href="https://supportchef.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to visit SupportChef
              </a>
            </span>
          );
        }
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{description}</p>
          </div>
        );
      });
      var codeSkills = this.props.data.skills.filter((skill) => {
        return skill.type === "language";
      });
      var webSkills = this.props.data.skills.filter((skill) => {
        return skill.type === "web";
      });
      var codeSkillContent = codeSkills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var webSkillContent = webSkills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <SkillContainer className="bars">
              <CodeSkillContentCSS className="skills">
                <br />
                {codeSkillContent}
              </CodeSkillContentCSS>
              <WebSkillContentCSS className="skills">
                <br />
                {webSkillContent}
              </WebSkillContentCSS>
            </SkillContainer>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
