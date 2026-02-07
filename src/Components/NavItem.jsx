import React from 'react';
import { NavLink } from 'react-router';

const NavItem = ({to, children}) => {
    return (
        <div>
            <NavLink
            to={to}
            className={({ isActive }) =>
               (isActive ? 'text-purple-500 border-b-2 border-violet-500 p-1 rounded-sm ' : 'text-default')}>
            {children}


            </NavLink>
        </div>
    );
};

export default NavItem;