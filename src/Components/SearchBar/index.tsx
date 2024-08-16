import { useState } from "react"
import pokeball from "../../assets/Pokebola.png"
import styles from "./styles.module.css"

interface MainProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
    pokeballHandleAnimation:()=>void
}

export function SearchBar({dataSearchAPI, pokeballHandleAnimation}:MainProps) {

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
                <button onClick={() => {
                    dataSearchAPI(pokemon)
                }}>
                    <img src={pokeball} alt="button" />
                </button>
            </div>
        </>
    )
}