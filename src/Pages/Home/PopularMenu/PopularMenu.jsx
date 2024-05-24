import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(item => item.category === "popular")
                setMenu(PopularItems)
            })
    }, [])

    return (

        <section>
            <SectionTitle
                heading="from our menu"
                subHeading="Popular Menu Items"
            ></SectionTitle>
            <div>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;