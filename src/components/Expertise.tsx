import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "MySQL",
    "SQLite",
    "Java",

];

const labelsSecond = [
    "Learn Lua",
    "Scan Systems with Nmap",
    "Introduction To Ethical Hacking",
    "Introduction to Cybersecurity",
    "Learn Python 3",
    "Learn Intermediate Python 3"

];

const labelsThird = [
    "Python3",
    "Pandas",
    "Numpy"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I have built multiple personal projects that implement the use of Java and mySQL/SQLite for database management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Independent Coursework</h3>
                    <p>These are courses I have taken outside of college courses. These courses are certified and were taken at Codecademy.com</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science</h3>
                    <p>In my data science projects, I use Python3, Pandas, and Numpy to efficiently manipulate data, perform detailed analysis, and handle numerical computations, which helps streamline my workflow and enhance my results.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;