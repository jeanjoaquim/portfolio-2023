import React from 'react';

type ProjectItemProps = {
    
};

const ProjectItem:React.FC<ProjectItemProps> = () => {
    
    return(
        <div className="project-container">
            <a href="https://www.figma.com/proto/oO4hEiRL9qZs1RGqoWjoBI/Geeklee-App?page-id=430%3A2&node-id=1077%3A346&viewport=241%2C48%2C0.14&scaling=scale-down-width" target="_blank"><img className="project-image" src="/project2.png"/></a>
            <div className="project-description">
                <h2>Geeklee<span>Coming soon</span></h2>
                <p>UX/UI Design</p>
                <button className="btn-view-project">
                    <a href="https://www.figma.com/proto/oO4hEiRL9qZs1RGqoWjoBI/Geeklee-App?page-id=430%3A2&node-id=1077%3A346&viewport=241%2C48%2C0.14&scaling=scale-down-width" target="_blank">View</a>
                </button>
            </div>
        </div>
    )
}
export default ProjectItem;