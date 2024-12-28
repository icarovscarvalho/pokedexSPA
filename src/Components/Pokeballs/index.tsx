import { useState } from "react"

import styles from "./styles.module.css"

import { FaStar } from "react-icons/fa"
import { MdOutlineChangeCircle } from "react-icons/md"

import pokeball from "../../assets/Pokebola.png"
import greatball from "../../assets/Greatball.png"
import ultraball from "../../assets/Ultraball.png"
import masterball from "../../assets/Masterball.png"



export function Pokeballs() {

    const [wasChoosed, setWasChoosed] = useState<boolean>(false)
    const [star, setStar] = useState<boolean>(false)
    let [skins, setSkins] = useState<number>(0)

    const skinsArr = [pokeball, greatball, ultraball, masterball]

    function spinBall() {
        setWasChoosed(prevState => !prevState)

        if(star === false) {
            setStar(prevState => !prevState)
        }

        const interval = setInterval(()=>{
            setWasChoosed(false)
            // console.log('O spin parou')
            clearInterval(interval)
        },1000)
    }

    function changeSkinPokeball() {
        console.log(`Valor atual do state: ${skins}`)
        if(skins >= 3) {
            setSkins(0)
        } else {
            setSkins(prevState => prevState +1)
        }

        skinsArr.forEach((image, index) => {
            if(skins === index) {
                console.log(index, image, skins)
            }
        })
    }

    return(
        <>
            <div className={styles.pokeballsDiv}>
                <div className={styles.pokeOptions}>
                    {!star ? <FaStar className={`${styles.icon} ${styles.starOFF}`} /> : <FaStar className={`${styles.icon} ${styles.starON}`} />}
                    <MdOutlineChangeCircle className={styles.icon} onClick={changeSkinPokeball} />
                </div>
                {/* "url(../../assets/Pokebola.png)" */}
                <div
                    onClick={spinBall}
                    style={{backgroundImage: `url(${skinsArr[skins]})`}}
                    className={wasChoosed ? `${styles.pokeSkin} ${styles.spin}` : styles.pokeSkin}
                />
            </div>
        </>
    )
}