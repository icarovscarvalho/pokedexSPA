import { useState } from 'react'
import { Header } from '../Header'
import { Main } from '../Main'
import { Instructions } from '../Instructions'
import { Menu } from '../Menu'
import { Footer } from '../Footer'
import styles from "./styles.module.css"

export function Container() {

    return(
        <>
            <div className={styles.globalContainer}>
                <Header />
                <Main />
                <Instructions />
                <Menu />
                <Footer />
            </div>
        </>
    )
}