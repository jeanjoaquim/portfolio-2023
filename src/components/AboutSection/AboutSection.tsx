import React from 'react';
import Separator from '../Separator/Separator';

type AboutSectionProps = {
    
};

const AboutSection:React.FC<AboutSectionProps> = () => {
    
    return(
        <>
            <Separator separatorText='about' />
            <section className="about-section">
                <div className="photo-container">
                    <img src="/profile-photo.png" alt="" className="profile-photo"/>
                </div>
                <div className="about-text-container">
                    <h2 className="about-title">hi!</h2>
                    <p className="about-text">
                        First of all, thank you for taking your time to see my portfolio, my name is Jean and I am a brazilian Front-End Developer and UX/UI Designer. I love travelling, playing racing games and every kind of stuff that can help me with creativity, such as drawing logos and compose music.
                    </p>
                    <p className="about-text">
                        Before deciding to start working in this area as a freelancer, I worked as an AdOps for Adaction, which I left to focus on development and design. As a self-taught, I improve my abilities in a daily basis by reading books, completing challenges and personal projects, aiming to have my work recognized on Awwwards.
                    </p>
                    <p className="about-text">
                        Although I decided to focus on design and front-end technologies to start my career, I do have previous experiences with back-end technologies which I used to build mobile games, e-commerce and delivery applications.
                    </p>
                    <p className="about-text">
                        I am also the creator of Geeklee, a platform that is being developed to inspire designers and developers, to share their work and also boost their careers by making it easier for them to be found by companies.
                    </p>
                    <p className="about-text">
                        I hope you liked everything you seen so far, I am available for freelance projects or to work as a UX/UI designer or front-end developer at your company!
                    </p>
                </div>
            </section>
        </>
        
    )
}
export default AboutSection;