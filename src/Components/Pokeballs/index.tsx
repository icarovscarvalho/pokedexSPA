import { useEffect, useState } from "react"

import styles from "./styles.module.css"

import { FaStar } from "react-icons/fa"
import { MdOutlineChangeCircle } from "react-icons/md"

import pokeball from "../../assets/Pokebola.png"
import greatball from "../../assets/Greatball.png"
import ultraball from "../../assets/Ultraball.png"
import masterball from "../../assets/Masterball.png"
import safariball from "../../assets/Safariball.png"
import gsball from "../../assets/GSball.png"
import premierball from "../../assets/Premierball.png"
import cherishball from "../../assets/Cherishball.png"
import rocketball from "../../assets/Rocketball.png"

interface PokeballsProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
    pokemonName:string
    id: string
}

type PokeballData = {
    pokemonName: string
    skin: number
}

export function Pokeballs({dataSearchAPI, pokemonName, id}:PokeballsProps) {

    const [pokeballData, setPokeballData] = useState<PokeballData>({
        pokemonName: '',
        skin: 0
    })

    const skinsArr = [pokeball, greatball, ultraball, masterball, safariball, gsball, premierball, cherishball, rocketball]

    useEffect(loadPokeballData,[])
    useEffect(recordPokeballData, [pokeballData])

    function loadPokeballData() {
        const rawData = localStorage.getItem(`pokeball_${id}`)

        if(rawData) {
            const data = JSON.parse(rawData)

            setPokeballData(data)
        }
    }

    function recordPokeballData() {
        setTimeout(() => {
            localStorage.setItem(`pokeball_${id}`, JSON.stringify(pokeballData))
        },100)
    }

    function spinBall() {
        setPokeballData(prevState => {
            return {
                ...prevState,
                pokemonName
            }
        })

        const animationInterval = setInterval(()=>{
            clearInterval(animationInterval)
        },1000)

        recordPokeballData()
    }

    function starCall() {
        const pkm = pokeballData.pokemonName

        if(pkm.length > 0) {
            dataSearchAPI(pkm)
        }
    }

    function changeSkinPokeball() {
        
        if(pokeballData.skin >= skinsArr.length -1) {
            setPokeballData(prevState => {
            return {
                ...prevState,
                skin: 0
            }
        })
        } else {
            setPokeballData(prevState => {
                return {
                    ...prevState,
                    skin: prevState.skin +1
                }
            })
        }

        recordPokeballData()
    }

    return(
        <>
            <div className={styles.pokeballsDiv}>

                <div className={styles.pokeOptions}>
                    <FaStar
                        className={`${styles.icon} ${!pokeballData.pokemonName ? styles.starOFF : styles.starON}`}
                        onClick={starCall}
                    />
                    <MdOutlineChangeCircle className={styles.icon} onClick={changeSkinPokeball} />
                </div>
                
                <div
                    onClick={spinBall}
                    style={{backgroundImage: `url(${skinsArr[pokeballData.skin]})`}}
                    className={pokeballData.pokemonName ? `${styles.pokeSkin} ${styles.spin}` : styles.pokeSkin}
                />
            </div>
        </>
    )
}