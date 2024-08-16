import { useState } from "react"
import { PokeField } from "../PokeField"
import { SearchBar } from "../SearchBar"
import styles from "./styles.module.css"

interface MainProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
    pokemonName:string
    pokemonID:string
    pokemonImage:string
    pokemonType:string
    pokeballHandleAnimation:()=>void
}

export function Main({dataSearchAPI, pokeballHandleAnimation, pokemonName, pokemonID, pokemonImage, pokemonType}:MainProps) {

    return(
        <>
            <main className={styles.container}>
                <SearchBar dataSearchAPI={dataSearchAPI}
                pokeballHandleAnimation={pokeballHandleAnimation}
                />
                <PokeField pokemonImage={pokemonImage} />
                <div className={styles.infoField}>
                    <div>
                    <p>{pokemonID}</p>
                    <p>{pokemonName}</p>
                    </div>
                    <div className={pokemonID!=''? styles.types : ''} style={{backgroundColor:`yellow`}}>
                        <p>{pokemonType}</p>
                    </div>
                </div>
            </main>
        </>
    )
}