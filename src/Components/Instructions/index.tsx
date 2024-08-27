import { useState } from "react";
import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import oakProfessor from "../../assets/professor-oak.png"
import styles from "./styles.module.css"

export function Instructions() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dialogPage, setDialogPage] = useState<number>(1)

    function handleToggleInstructions() {
        setIsMenuOpen(prevState=>!prevState)
        console.log(isMenuOpen)
    }

    function handleNextDialogPage() {
        if(dialogPage < 3) {
            setDialogPage(prevState=>prevState+1)
        }
    }

    function handlePrevDialogPage() {
        if(dialogPage > 1) {
            setDialogPage(prevState=>prevState-1)
        }
    }

    return(
        <>
            <section className={styles.container}>
                <button onClick={handleToggleInstructions}>
                    {isMenuOpen? <MdKeyboardDoubleArrowDown/> : <MdKeyboardDoubleArrowUp />}
                </button>
                {isMenuOpen &&
                    <div className={styles.instructionsDiv} >
                    <h2>Instructions <FaBook /></h2>
                    <div>
                        {dialogPage===1 && <p>Hello son, I'm Professor Oak. If you want looking for some pokemon, you can write its <strong>name</strong> or <strong>ID number</strong> on search bar and then click on the Pokeball next to it. Let's try. For example, type for <strong>Pikachu</strong> or just number <strong>25</strong>.
                        </p>}
                        {dialogPage===2 && <p>
                        If you want to save the information to view later, you can click the down arrow button to close this menu, so you will notice another black button, which is the pokeball area. When you click on any of them, the information about the current Pokémon in the search will be saved inside the chosen Pokeball.
                        </p>}
                        {dialogPage===3 && <p>After that, a check button will appear that will directly show all the information about the chosen Pokémon.</p>}
                        <div className={styles.instructionsButtonsContainer}>
                            <button onClick={handlePrevDialogPage}><MdOutlineKeyboardDoubleArrowLeft /></button>
                            <p>{dialogPage}</p>
                            <button onClick={handleNextDialogPage}><MdOutlineKeyboardDoubleArrowRight /></button>
                        </div>
                    </div>
                    <img src={oakProfessor} alt="Oak professor" />
                </div>}
            </section>
        </>
    )
}