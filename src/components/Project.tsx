import React from "react";
import chess from "../assets/images/chess.png"
import fitness from "../assets/images/fitness.png"
import notes from "../assets/images/notes1.png"
import task from "../assets/images/task.png"
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={chess} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Chess Game</h2></a>
                <p>In a Maven-based Java chess game with two servers, I implemented a system that allows two players to connect and compete in real-time, while also featuring a leaderboard, personal stats tracking, and user login functionality, all managed through a MySQL database.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={notes} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Secure Notes App</h2></a>
                <p>This Java-based Secure Notes Application utilizes SQLite for secure user authentication and note management, featuring a Model-View-Controller (MVC) architecture and basic UI, with future plans for UI improvements and enhanced error handling</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={fitness} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Fitness Application</h2></a>
                <p>For this Fitness Application project in Java, I implemented an MVC architecture with features like interactive body part selection, a body fat calculator, and secure user authentication using SHA-256 hashing, all managed with JDBC and a functional Swing-based UI.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={task} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Task Tracker</h2></a>
                <p>This Java project is a task tracker that allows users to input tasks and due dates, offering basic CRUD functionality for managing tasks.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;