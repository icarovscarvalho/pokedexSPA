import { useState } from "react";

import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";


import styles from "./styles.module.css"
import { Pokeballs } from "../Pokeballs";

interface MenuProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
    pokemonName:string
}

export function Menu({dataSearchAPI, pokemonName}:MenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleToggleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    function populatePokeballs(qtd:number) {
        const pokeballs = []

        for(let i=0; i<qtd; i++) {
            pokeballs.push(
                <Pokeballs
                    key={`pkb${i}`}
                    dataSearchAPI={dataSearchAPI}
                    pokemonName={pokemonName}
                    id={`pkb${i}`}
                />
            )
        }

        return pokeballs
    }

    return(
        <>
            <section className={styles.container}>
                <button className={isMenuOpen?'' : styles.closed} onClick={handleToggleMenu}>
                    {isMenuOpen? <MdKeyboardDoubleArrowDown/> : <MdKeyboardDoubleArrowUp />}
                </button>
                <div className={styles.pokeballsContainer} style={isMenuOpen? {display:'flex'} : {display:'none'}}>
                    {populatePokeballs(6)}
                </div>
            </section>
        </>
    )
}