import React, { useState } from "react"
import pokeball from "../../assets/Pokebola.png"
import styles from "./styles.module.css"

interface MainProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
}

export function SearchBar({dataSearchAPI}:MainProps) {

    let [pokemon, setPokemon] = useState<string>("")
    const [wasClicked, setWasClicked] = useState<boolean>(false)

    const  handleChange = (e:any) => setPokemon(e.target.value.toLowerCase())

    function handleForm(e:React.FormEvent) {
        e.preventDefault()
        dataSearchAPI(pokemon)
        setPokemon('')
    }

    function pokeballHandleAnimation() {
        setWasClicked(prevState=>!prevState)
        console.log(wasClicked)
        // console.log('A pokebola está girando')
        
        const interval = setInterval(()=>{
            setWasClicked(false)
            // console.log('O spin parou')
            clearInterval(interval)
        },1000)
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
                <button type="submit" onClick={pokeballHandleAnimation}>
                    {<img src={pokeball} alt="button" className={wasClicked? styles.spin : ""} />}
                </button>
            </form>
        </>
    )
}