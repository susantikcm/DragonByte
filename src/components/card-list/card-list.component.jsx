import React from 'react';

import CustomCard from '../card/card.component';

import './card-list.style.scss'; 

const CustomCardList = ({ category, projects }) => (
    <div>
        <h1 className='category'>{category.toUpperCase()}</h1>
        <div className='card-list'>
        {
            projects
                .filter((projects, idx) => idx < 4)
                .map((project) => (
                    <CustomCard key={project.id} category={category} project={project} />
            ))
        }
        </div>

    </div>
)

export default CustomCardList;