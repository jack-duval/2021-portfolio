import { React } from "react";
import "./styles.css";

const mazeImgPath = "../assets/maze.png";

const Projects = () => {
    return (
    <div>
        <ul className="projectList">
            <li>
                <h5 className="projectTitle"><strong>Unnaounced Web3 Project</strong></h5>
                <p>Improving digital identity on the blockchain.</p>
                {/* <p>Thumbprint changes digital identity on the blockchain to include behavioral traits. Ultimately, we'll help connect people to orgainzations where they'll be comfortable and confident. More coming soon! (DM's are also open)</p> */}
            </li>
            <li>
                <h5 className="projectTitle"><strong>Maze Solver</strong></h5>
                <p>A C++ project that solves mazes recursively and non-recursively. It implements a graph and various traversal methods.</p>
            </li>
            <li>
                <h5 className="projectTitle"><strong>Sudoku Solver</strong></h5>
                <p>A C++ project that solves sudoku puzzles using backtracking and recursion.</p>
            </li>
            <li>
                <h5 className="projectTitle"><strong>Word Search Solver</strong></h5>
                <p>A C++ project that solves word search puzzles. Includes several sorting algorithms for comparion (Selection Sort, Quick Sort, Heap Sort). </p>
            </li>
        </ul>
    </div>
    );
}

export default Projects;