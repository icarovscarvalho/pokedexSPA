import { PokeField } from "../PokeField"
import { SearchBar } from "../SearchBar"
import styles from "./styles.module.css"
import { MdOutlineDoubleArrow } from "react-icons/md";

interface MainProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
    pokemonName:string
    pokemonID:number
    pokemonEVO:string
    pokemonImage:string
    pokemonType:string[]
}

export function Main({dataSearchAPI, pokemonName, pokemonID, pokemonEVO, pokemonImage, pokemonType}:MainProps) {

    return(
        <>
            <main className={styles.container}>
                <SearchBar dataSearchAPI={dataSearchAPI}
                />
                <PokeField pokemonImage={pokemonImage}  />
                <div className={styles.infoField}>
                    <div>
                        <p>{pokemonName ? `#${pokemonID}`:""}</p>
                        <p>{pokemonName}</p>
                    </div>

                    {pokemonName ?
                        <div className={styles.typesContainer}>
                            {pokemonType.map(type=>
                                <div key={type} className={`${styles.types} ${styles[type.toLowerCase()]}`}>
                                    <p>{type}</p>
                                </div>    
                            )}
                        </div>
                        : ""
                    }
                    
                    {pokemonName ?
                        <div className={styles.pokeTreeFamily}>
                            <div className={styles.pokeTree} style={{backgroundImage:`url(${pokemonImage})`}}></div>
                            <MdOutlineDoubleArrow className={styles.arrowEvo} />
                            <div className={styles.pokeTree} style={{backgroundImage:`url(${pokemonEVO})`}}></div>
                            <MdOutlineDoubleArrow className={styles.arrowEvo} />
                            <div className={styles.pokeTree} style={{backgroundImage:`url(${pokemonImage})`}}></div>
                        </div>
                        : ""
                    }

                </div>
            </main>
        </>
    )
}