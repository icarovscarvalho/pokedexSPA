import { Header } from '../Header'
import { Main } from '../Main'
import { Instructions } from '../Instructions'
import { Menu } from '../Menu'
import { Footer } from '../Footer'
import styles from "./styles.module.css"
import { SetStateAction, useState } from 'react'

type PokemonType = string

type TypeObj = {
    type:{
        name:string
    }
}

export function Container() {

    const [pokemonID, setPokemonID] = useState<number>(0)
    const [firstEvoID, setFirstEvoID] = useState<string>('')
    const [pokemonName, setPokemonName] = useState<string>('')
    const [pokemonImage, setPokemonImage] = useState<string>('')
    const [pokemonType, setPokemonType] = useState<string[]>([])

    async function getDatasAPI(pokemon:PokemonType) {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const responseJSON = await response.json()
            const pokemonTypesList: SetStateAction<string[]> = []
            
            setPokemonID(responseJSON.id)
            setFirstEvoID(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${responseJSON.id+1}.png`)
            setPokemonName(responseJSON.name)
            setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${responseJSON.id}.png`)
            // setPokemonType(responseJSON.types[0].type.name)
            responseJSON.types.map((typeObj:TypeObj)=>{
                pokemonTypesList.push(typeObj.type.name)
            })
            setPokemonType(pokemonTypesList)
        } catch (erro) {
            alert("Este Pokemon não foi encontrado no banco de dados. Por favor verifique se o ID ou Nome estão escritos corretamente!")
            console.log("Algo de errado", erro)
        } finally {
            console.log("Requisição terminada")
        }
    }

    return(
        <>
            <div className={styles.globalContainer}>
                <Header />
                <Main
                    dataSearchAPI={getDatasAPI}
                    pokemonName={pokemonName}
                    pokemonID={pokemonID}
                    pokemonEVO={firstEvoID}
                    pokemonImage={pokemonImage}
                    pokemonType={pokemonType}
                />
                <div className={styles.buttonsContainer}>
                    <Instructions />
                    <Menu
                        dataSearchAPI={getDatasAPI}
                        pokemonName={pokemonName}
                    />
                </div>
                <Footer />
            </div>
        </>
    )
}