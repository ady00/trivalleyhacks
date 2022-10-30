import React from 'react';
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';


export function NavBar(props) {
    return (
        <div className={styles['nav-bar']}>
            <img src="logo.png" className={styles.logo} alt='belb logo' />
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    );
}