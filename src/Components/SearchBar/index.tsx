import React, { useState } from "react"
import pokeball from "../../assets/Pokebola.png"
import styles from "./styles.module.css"

interface MainProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
    pokeballHandleAnimation:()=>void
}

export function SearchBar({dataSearchAPI, pokeballHandleAnimation}:MainProps) {

    let [pokemon, setPokemon] = useState<string>("")

    const  handleChange = (e:any) => setPokemon(e.target.value)

    function handleForm(e:React.FormEvent) {
        e.preventDefault()
        dataSearchAPI(pokemon)
        setPokemon('')
    }

    return(
        <>
            <form className={styles.searchBar} onSubmit={(e) => handleForm(e)}>
                <input
                type="text"
                min={1}
                placeholder="Name or ID..."
                value={pokemon}
                onChange={handleChange}
                />
                <button type="submit">
                    <img src={pokeball} alt="button" />
                </button>
            </form>
        </>
    )
}