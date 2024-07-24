import { PokeField } from "../PokeField"
import { SearchBar } from "../SearchBar"
import styles from "./styles.module.css"


export function Main() {
    return(
        <>
            <main className={styles.container}>
                <SearchBar />
                <PokeField />
                <div className={styles.infoField}>
                    <p>#25</p>
                    <div className={styles.types} style={{backgroundColor:`yellow`}}>
                        <p>eletric</p>
                    </div>
                </div>
            </main>
        </>
    )
}