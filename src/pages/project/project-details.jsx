import React from 'react';

function ProjectDetails({ title, contentUrl }) {
    return (
         <div style={{ top:'0', bottom:'0' }}> 
            <h2>Project Details {title}</h2>
            <iframe 
                src={`https://scratch.mit.edu/projects/324550052/embed`} 
                allowtransparency="true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default ProjectDetails;