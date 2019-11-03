import React from 'react';

const About = (props) => {
    return (
        <div style={styles.about}>
            About Page
            <div>
                <button className="btn btn-outline-success"
                    onClick={() => props.history.goBack()}
                >
                    Back
                </button>
                <button className="btn btn-outline-success"
                    onClick={() => props.history.push('/Projects')}
                >
                    Contact
                </button>
            </div>
        </div>
    );
}

const styles = {
    about: {
        fontSize: 20,
        fontWeight: 'bold'
    }
};

export default About;
