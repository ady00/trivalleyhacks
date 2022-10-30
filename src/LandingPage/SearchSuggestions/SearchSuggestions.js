import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions() {
    return (
        <div className={styles.suggestions}>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span><span className={styles.suggestion}>Local Restaurants</span>
            <span className="icon is-small"><i className="fas fa-cocktail"></i></span><span className={styles.suggestion}>Local Bars</span>
            <span className="icon is-small"><i className="fas fa-concierge-bell"></i></span><span className={styles.suggestion}>Local Lodging</span>
            <span className="icon is-small"><i className="fas fa-truck"></i></span><span className={styles.suggestion}>Local Delivery</span>
        </div>
    );
}