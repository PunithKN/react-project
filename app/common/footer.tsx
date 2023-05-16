import React from "react";
import styles from './header/header.module.css'
export default function Footer()

{
    return(
        <React.Fragment>
            <footer className={styles.foot}>
                <h4>Copyright</h4>
                <p>Email:abcd@react.com</p>
                <p>Address:Global village back gate</p>
                <p>Banglore 560001</p>
            </footer>

        </React.Fragment>
    )
}