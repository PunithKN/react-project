import React from "react";
import styles from './header.module.css'
export default function Header()
{
    return(
        <React.Fragment>
            <nav>
                <p className={styles.para}>Welcome to our page</p>
               
                <ul className={styles.listingWrapper}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </React.Fragment>
    )
}