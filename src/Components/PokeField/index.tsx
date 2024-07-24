import styles from "./styles.module.css"
import pokemon from "../../assets/pikachu.png"
export function PokeField() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.pokemon} style={{backgroundImage:`url(${pokemon})`}}></div>
            </div>
        </>
    )
}