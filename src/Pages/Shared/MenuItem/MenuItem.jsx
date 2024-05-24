import React from 'react';

const MenuItem = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div>
            <img src={image} alt="image error" />
            <div>
                <h3 className='uppercase'>{name}---------</h3>
                <p>{recipe}</p>
            </div>

        </div>
    );
};

export default MenuItem;