import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import CustomButton from '../button/button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { PROJECT_DETAILS } from '../routes/routes.paths';

import './card.style.scss';

function CustomCard({ category, project, addItem }) {
    const { title } = project;
    let history = useHistory();

    function handleClick() {
        history.push(PROJECT_DETAILS);
    }

    return (
        <div className={`card ${category.toLowerCase()}`}>
            <img className="card-image" src={`https://robohash.org/${title}?size=100x100`} alt="No Project"/>
            <div className="card-body">
                <h5>{title}</h5>
            </div>
            <CustomButton onClick={handleClick} inverted>Play</CustomButton>
            <CustomButton onClick={() => addItem(project)} isAddToCart style={{ top:'auto', bottom:'10px', display:'flex'}} >Add to cart</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CustomCard);