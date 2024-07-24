import pokeball from "../../assets/Pokebola.png"
import styles from "./styles.module.css"

export function SearchBar() {
    return(
        <>
            <div className={styles.searchBar}>
                <input type="text" min={1} />
                <button>
                    <img src={pokeball} alt="button" />
                </button>
            </div>
        </>
    )
}