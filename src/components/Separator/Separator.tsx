import React from 'react';

type SeparatorProps = {
    separatorText: string
};

const Separator:React.FC<SeparatorProps> = ({ separatorText }) => {
    
    return(
        <div id={separatorText} className="content-divisor">
            <h2>{separatorText}</h2>
            <span></span>
        </div>
    )
}
export default Separator;