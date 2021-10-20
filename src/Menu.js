import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <>
           <NavLink exact to="/"> Home </NavLink>  |
           <NavLink exact to="/info"> Info </NavLink> |
           <NavLink exact to="/about"> About </NavLink>  |
           <NavLink exact to="/contact"> Contact  </NavLink> |
           <NavLink exact to="/demo"> Demo </NavLink> |
           <NavLink exact to="/user"> User </NavLink> |
           <NavLink exact to="/felix"> Felix </NavLink> |
           <NavLink exact to="/file"> File </NavLink> |
           <NavLink exact to="/document"> Document </NavLink> |
           <NavLink exact to="/web"> Web </NavLink> |
         

         </>
    );
}

       export default Menu;  