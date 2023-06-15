import React from 'react';

type StyleSectionProps = {
    
};

const StyleSection:React.FC<StyleSectionProps> = () => {
    
    return(
        <section className="style-section">
            <div className="style-content">
                <div className="content-divisor style-divisor">
                    <h2>my work</h2>
                    <span></span>
                </div>
                <div className="style-container text-container">
                    <p className="text">I help companies and clients achieve goals and boost results by creating unique and memorable experiences, always focused on high quality usability and attention to detail, characteristics recognized and praised by Exxon while designing internal applications for logistics and strategies.</p>
                    <p className="text">My work is all about the design and development of user interfaces of websites, mobile apps and internal applications but I can also work with the back-end of minor projects and logo designs such as the one displayed on the header of my page.</p>
                </div>
            </div>
        </section>
    )
}
export default StyleSection;