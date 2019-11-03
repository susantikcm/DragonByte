import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import CardRobot from './cardRobot';

function CardListRobot({ robots }) {
    return(
        <CardDeck style={{ justifyContent: 'center' }}>
        {
            robots.map((robot, i) => {
                return (
                    <CardRobot
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                    />                   
                );
            })
        }
        </CardDeck>        
    );
}

export default CardListRobot;