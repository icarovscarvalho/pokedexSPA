import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdOutlineChangeCircle } from "react-icons/md";
import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "./styles.module.css"


{/* <FaRegStar /> */}

export function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleToggleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    return(
        <>
            <section className={styles.container}>
                <button onClick={handleToggleMenu}>
                    {isMenuOpen? <MdKeyboardDoubleArrowDown/> : <MdKeyboardDoubleArrowUp />}
                </button>
                <div className={styles.pokeballsContainer} style={isMenuOpen? {display:'flex'} : {display:'none'}}>
                    <div className={styles.pokeballsDiv}>
                        <div className={styles.pokeOptions}>
                            <FaRegStar className={styles.icon} />
                            <MdOutlineChangeCircle className={styles.icon} />
                        </div>
                        <div className={styles.pokeSkin}/>
                    </div>
                    <div className={styles.pokeballsDiv}>
                        <div className={styles.pokeOptions}>
                            <FaRegStar className={styles.icon} />
                            <MdOutlineChangeCircle className={styles.icon} />
                        </div>
                        <div className={styles.pokeSkin}/>
                    </div>
                    <div className={styles.pokeballsDiv}>
                        <div className={styles.pokeOptions}>
                            <FaRegStar className={styles.icon} />
                            <MdOutlineChangeCircle className={styles.icon} />
                        </div>
                        <div className={styles.pokeSkin}/>
                    </div>
                </div>
            </section>
        </>
    )
}