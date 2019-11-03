import React from 'react';

const Scroll = (props) => {
    return (
        <div className="container-fluid" style={{ overflow:'scroll', border:'1px solid black', position: 'absolute', height: 'auto' }}>
            { props.children }
        </div>
    );
}

export default Scroll;