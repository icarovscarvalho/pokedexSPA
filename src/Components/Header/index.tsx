import logo from "../../assets/Pokebola.png"
import styles from "./styles.module.css"

export function Header() {
    return(
        <>
            <header className={styles.container}>
                <img src={logo} alt="Logo Image" />
                <h1>Pokedex</h1>
            </header>
        </>
    )
}