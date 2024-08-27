import { PokeField } from "../PokeField"
import { SearchBar } from "../SearchBar"
import styles from "./styles.module.css"

interface MainProps{
    dataSearchAPI:(pokemon:string)=>Promise<void>
    pokemonName:string
    pokemonID:string
    pokemonImage:string
    pokemonType:string[]
}

export function Main({dataSearchAPI, pokemonName, pokemonID, pokemonImage, pokemonType}:MainProps) {

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

                </div>
            </main>
        </>
    )
}