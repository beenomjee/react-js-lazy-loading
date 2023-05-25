import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.logo}><Link to="/">Logo</Link></div>
                <nav>
                    <ul className={styles.navLinks}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.selected : ''} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.selected : ''} to="/about">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.selected : ""} to="/showcase">Show Case</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header