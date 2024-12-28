import { useState } from "react";

import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";


import styles from "./styles.module.css"
import { Pokeballs } from "../Pokeballs";

export function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleToggleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    return(
        <>
            <section className={styles.container}>
                <button className={isMenuOpen?'' : styles.closed} onClick={handleToggleMenu}>
                    {isMenuOpen? <MdKeyboardDoubleArrowDown/> : <MdKeyboardDoubleArrowUp />}
                </button>
                <div className={styles.pokeballsContainer} style={isMenuOpen? {display:'flex'} : {display:'none'}}>
                    <Pokeballs />
                    <Pokeballs />
                    <Pokeballs />
                    <Pokeballs />
                    <Pokeballs />
                    <Pokeballs />
                </div>
            </section>
        </>
    )
}