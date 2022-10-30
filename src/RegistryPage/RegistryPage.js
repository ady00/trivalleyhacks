import React from 'react';
import styles from './BusinessRating.module.css';
import Rating from 'react-rating';

export function RegistryPage(props) {
    return (
        <div className="form">
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="username">Username: </label>
                <input className="form__input" type="text" id="username" placeholder="John123"/>
            </div>
            <div className="email">
                <label className="form__label" for="email">Email: </label>
                <input type="email" id="email" className="form__input" placeholder="Email"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password: </label>
                <input className="form__input" type="password"  id="password" placeholder="Password"/>
            </div>
            <div className="confirm-password">
                <label className="form__label" for="confirmPassword">Confirm Password: </label>
                <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
            </div>
        </div>
        <div class="footer">
            <button type="submit" class="btn">Register</button>
        </div>
    </div> 
    );
}