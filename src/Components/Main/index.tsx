import styles from "./styles.module.css"
import pokeball from "../../assets/Pokebola.png"

export function Main() {
    return(
        <>
            <main className={styles.container}>
                <div className={styles.searchBar}>
                    <input type="text" />
                    <button>
                        <img src={pokeball} alt="button" />
                    </button>
                </div>
                <div></div>
                <div></div>
            </main>
        </>
    )
}