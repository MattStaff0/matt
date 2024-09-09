import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="coursework">
      <div className="items-container">
        <h1>Relevant Coursework</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Structures and Algorithms</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas Christian Univeristy</h4>
            <p>
            Fundamental data structures, including linear lists, trees, graphs, and arrays, along with techniques for sorting, searching, and representing these structures in programming languages.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Discrete Mathematics II</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas Christian Univeristy</h4>
            <p>
            Advanced topics such as combinatorics, recurrence relations, equivalence relations, and graph theory, focusing on solving problems and writing proofs related to these discrete mathematical concepts.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Linux/UNIX System Administration</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas Christian Univeristy</h4>
            <p>
            Manage and troubleshoot Linux and UNIX systems, covering system design, installation, file systems, BASH shell, user and process management, backup/restore procedures, and common administrative tasks through both lectures and hands-on lab work.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Spring 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Techniques in Programming</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas Christian Univeristy</h4>
            <p>
            Fundamental concepts including arrays, ArrayLists, GUI design, socket programming, client-server architecture, and recursion, which together build a strong foundation for developing versatile and efficient software solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Spring 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Linear Algebra</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas Christian Univeristy</h4>
            <p>
            Vector spaces, linear transformations, matrices, and systems of linear equations, which provide the foundational tools for solving complex problems in various fields of mathematics and science.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Fall 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Introduction to Programming</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas Christian Univeristy</h4>
            <p>
            Gained foundational knowledge in binary and hexadecimal systems, bitwise operations, data types, object-oriented programming principles, and core Java syntax and concepts.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;