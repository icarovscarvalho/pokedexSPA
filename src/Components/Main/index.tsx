import { PokeField } from "../PokeField"
import { SearchBar } from "../SearchBar"
import styles from "./styles.module.css"
import { MdOutlineDoubleArrow } from "react-icons/md";

interface MainProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
    pokemonName:string
    pokemonID:string
    pokemonImage:string
    pokemonType:string[]
    pokeEvoFirst:string
}

export function Main({dataSearchAPI, pokemonName, pokemonID, pokemonImage, pokemonType, pokeEvoFirst}:MainProps) {

    return(
        <>
            <main className={styles.container}>
                <SearchBar dataSearchAPI={dataSearchAPI}
                />
                <PokeField pokemonImage={pokemonImage} />
                <div className={styles.infoField}>
                    <div>
                    <p>{pokemonID}</p>
                    <p>{pokemonName}</p>
                    </div>

                    {pokemonID &&
                        <div className={styles.typesContainer}>
                            {pokemonType.map(type=>
                                <div key={type} className={`${styles.types} ${styles[type.toLowerCase()]}`}>
                                    <p>{type}</p>
                                </div>    
                            )}
                        </div>
                    }
                    {pokemonID &&
                        <div className={styles.pokeTreeFamily}>
                            <div className={styles.pokeTree} style={{backgroundImage:`url(${pokeEvoFirst})`}}></div>
                            <MdOutlineDoubleArrow className={styles.arrowEvo} />
                            <div className={styles.pokeTree}></div>
                            <MdOutlineDoubleArrow className={styles.arrowEvo} />
                            <div className={styles.pokeTree}></div>
                        </div>
                    }

                </div>
            </main>
        </>
    )
}