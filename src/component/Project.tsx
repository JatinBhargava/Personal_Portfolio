import React from "react";
import { Project } from "../Lists/ProjectList";
import { FaBeer } from 'react-icons/fa';
import { BsArrowUpRight ,BsFill4CircleFill} from "react-icons/bs";


const Projects = () => {
  return (
    <div>
      <h3 className="ml-5 font-bold text-lg">Projects</h3>
        {Project.map(item => {
            return(<>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-blue-800 dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
           {item.title} 
          </h3>
          <div> 
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <a href={item.githubLink}>Code</a>
            </time>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <a href={item.demoLink}>Demo</a>
            </time>
          </div>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
        </li>
      </ol>
            </>)
        })}
      
    </div>
  );
};

export default Projects;
