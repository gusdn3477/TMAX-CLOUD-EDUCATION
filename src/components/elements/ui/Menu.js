import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/menu")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMenuData(data);
            })
            .catch(error => console.log(error));
    }, []);

    const menuList = menuData.map(item => {
        if (!(item.children)) {
            return (
                <li key = {item.id}><Link to={item.url}>{item.name}</Link></li>
            );
        } else {
            return(
            <li key = {item.id}>
                <Link to = {item.url}>{item.name}</Link>
                <ul className="mega-menu">
                    <li>
                        <ul>
                            {
                                item.children.map(subitem => (
                                    <li key={subitem.id}><Link to={subitem.url}>{subitem.name}</Link></li>
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            </li>
            )
        }
    })

    return (
        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            <div className=" main-menu  ">
                <nav>
                    <ul>
                        {menuList}
                    </ul>
                </nav>
            </div>
        </div>
    );
}