import { useState } from "react";
import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import oakProfessor from "../../assets/professor-oak.png"
import styles from "./styles.module.css"

export function Instructions() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleToggleInstructions() {
        setIsMenuOpen(prevState=>!prevState)
    }

    return(
        <>
            <section className={styles.container}>
                <button onClick={handleToggleInstructions}>
                    {isMenuOpen? <MdKeyboardDoubleArrowDown/> : <MdKeyboardDoubleArrowUp />}
                </button>
                <div className={styles.instructionsDiv} style={isMenuOpen? {display:'flex'} : {display:'none'}}>
                    <h2>Instructions <FaBook /></h2>
                    <p>Hello son, I'm Professor Oak. If you want looking for some pokemon, you can write its <strong>name</strong> or <strong>ID number</strong> on search bar and then click on the Pokeball next to it. Let's try. For example, type for <strong>Pikachu</strong> or just number <strong>25</strong>.
                    <br />
                    <br />
                    If you want to save the information to view later, in the menu above you will find some pokeballs. By clicking on any of them, the information on the current pokemon in the search will be saved.</p>
                    <img src={oakProfessor} alt="Oak professor" />
                </div>
            </section>
        </>
    )
}