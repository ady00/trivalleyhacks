import React from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';
import {Spinner} from '../../Spinner/Spinner.js';
import {term} from '../Search.js'




const backendData = [
    { title: "auto", name: "Old Town Auto Care", address: "57 California Avenue", description: "We make cars.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},
    { title: "auto", name: "Autotron Service Center", address: "57 California Avenue", description: "We make cars.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},
    { title: "auto", name: "SAS German Auto", address: "57 California Avenue", description: "We make cars.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},


    { title: "lodging", name: "Hotel Roma", address: "57 California Avenue", description: "We make hotel rooms.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},
    { title: "lodging", name: "Famous Days Inn", address: "57 California Avenue", description: "We make hotel rooms.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},
    { title: "lodging", name: "Pleasanton Lodging", address: "57 California Avenue", description: "We make hotel rooms.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},


    { title: "restaurants", name: "Coffee Boba Pleasanton", address: "57 California Avenue", description: "We make restaurants.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},
    { title: "restaurants", name: "La Izquierda Taqueria", address: "57 California Avenue", description: "We make restaurants.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},
    { title: "restaurants", name: "Barone's Restaurant", address: "57 California Avenue", description: "We make restaurants.", website: "http://www.oldtownautocare.com/", number: "925-445-8769"},
    ]

//for (let i = 0; i < 9; ++i) {
//    if (backendData.title == term) {
//        
//    }
//}

export function SearchResults(props) {
    let searchResults = <Spinner/>;
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
    }
    return (
        <div className={styles['search-results']}>
            <div>
                <div>
                    <b>term</b>
                </div>
            </div>
        </div>
    );
}