import React, { useContext } from 'react';
import { DataContext } from "../providers/DataProvider";

import * as styles from '../styles/nav.module.scss';

const Nav = () => {
    const [data, setData] = useContext(DataContext)

    return (
        <nav className={styles.container}>
            <div className={styles.logoContainer}>
            <svg viewBox="0 0 100 100" fill="none">
                <rect x="3" y="3" width="94" height="94" stroke="black" strokeWidth="6"/>
                <path d="M39.5 32L61 68.5H82L61 32L39.5 68.5H18L39.5 32Z" stroke="black" strokeWidth="6"/>
            </svg>
            </div>
            <div className={styles.links}>
                <p
                    onClick={() => {
                        setData(state => ({ ...state, currentInfoComponent: 'info' }))
                    }}
                    className={styles.link}
                >Current Artist</p>
                <p
                    onClick={() => {
                        setData(state => ({ ...state, currentInfoComponent: 'collection' }))
                    }}
                    className={styles.link}
                >Collection</p>
                <p
                    onClick={() => {
                        setData(state => ({ ...state, currentInfoComponent: 'chat' }))
                    }}
                    className={styles.link}
                >Chat</p>
                <p
                    onClick={() => {
                        setData(state => ({ ...state, currentInfoComponent: 'about' }))
                    }}
                    className={styles.link}
                >About</p>
            </div>
        </nav>
    )
}

export default Nav