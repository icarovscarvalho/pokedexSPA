import styles from "./styles.module.css"

interface PokerFieldProps{
    pokemonImage:string
}

export function PokeField({pokemonImage}:PokerFieldProps) {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.pokemon} style={{backgroundImage:`url(${pokemonImage})`}}></div>
            </div>
        </>
    )
}