import { useState } from "react"
import pokeball from "../../assets/Pokebola.png"
import styles from "./styles.module.css"

interface MainProps{
    dataSearch:(pokemon:string)=>Promise<void>
}

export function SearchBar({dataSearch}:MainProps) {

    let [pokemon, setPokemon] = useState<string>("")

    const  handleChange = (e:any) => setPokemon(e.target.value)

    // const getPokemonValue = (e:any) => {
    //     console.log(pokemon)
    // }

    return(
        <>
            <div className={styles.searchBar}>
                <input
                type="text"
                min={1}
                placeholder="Name or ID..."
                value={pokemon}
                onChange={handleChange}
                />
                <button onClick={() => dataSearch(pokemon)}>
                    <img src={pokeball} alt="button" />
                </button>
            </div>
        </>
    )
}