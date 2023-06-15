import React from 'react';
import Separator from '../Separator/Separator';
import ProjectItem from '../ProjectItem/ProjectItem';

type ProjectsSectionProps = {
    
};

const ProjectsSection:React.FC<ProjectsSectionProps> = () => {
    
    return(
        <>
            <Separator separatorText={'projects'} />
            <section className="projects-section">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </section>
            
        </>
    )
}
export default ProjectsSection;