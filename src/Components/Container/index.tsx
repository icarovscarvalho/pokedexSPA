import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import styles from "./styles.module.css"
import { Instructions } from '../Instructions'
import { useState } from 'react'

export function Container() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleToggleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    return(
        <>
            <div className={styles.globalContainer}>
                <Header />
                <Main />
                <Instructions ToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
                <Footer />
            </div>
        </>
    )
}