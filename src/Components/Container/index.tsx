import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import styles from "./styles.module.css"

export function Container() {
    return(
        <>
            <div className={styles.globalContainer}>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}