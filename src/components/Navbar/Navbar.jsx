import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./navbarFrieds/Friends";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.links}>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/messages' activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='music' activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='settings' activeClassName={classes.active}>Settings</NavLink>
                </div>
            </div>
            <Friends className={classes.friends} friends={props.friends}/>
        </nav>


    )
}

export default Navbar;