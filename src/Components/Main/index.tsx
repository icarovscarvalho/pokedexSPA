import { PokeField } from "../PokeField"
import { SearchBar } from "../SearchBar"
import styles from "./styles.module.css"

interface MainProps{
    dataSearch:(pokemon:string)=>Promise<void>
}

export function Main({dataSearch}:MainProps) {
    return(
        <>
            <main className={styles.container}>
                <SearchBar dataSearch={dataSearch} />
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