import { Header } from '../Header'
import { Main } from '../Main'
import { Instructions } from '../Instructions'
import { Menu } from '../Menu'
import { Footer } from '../Footer'
import styles from "./styles.module.css"

type PokemonType = string

export function Container() {

    let pokemonID:number = 1
    let pokemonName:string = "name"

    async function getDatasAPI(pokemon:PokemonType) {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const responseJSON = await response.json()
            
            pokemonID = responseJSON.id;
            pokemonName = responseJSON.name;

            console.log(pokemonID, pokemonName)
        } catch (erro) {
            console.log("Algo de errado", erro)
        } finally {
            console.log("Requisição terminada")
        }
    }

    return(
        <>
            <div className={styles.globalContainer}>
                <Header />
                <Main dataSearch={getDatasAPI} />
                <div className={styles.buttonsContainer}>
                    <Instructions />
                    <Menu />
                </div>
                <Footer />
            </div>
        </>
    )
}