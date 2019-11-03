import React from 'react';
import Card from 'react-bootstrap/Card';

function CardRobot({ id, name }) {
    return (
        <Card className="bg-success" style={styles.size} >
            <Card.Img className="img-thumbnail" variant="top" src={`https://robohash.org/${name}?size=100x100`} />
            <Card.Body>
                <Card.Title>{id}. {name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

const styles = {
    size: {
        minWidth: '16rem',
        maxWidth: '16rem',
        minHeight: '20rem',
        maxHeight: '20rem', 
        margin: '1rem',
        borderRadius: '2em'
    }
}

export default CardRobot;