import Reaction from "./Reaction";
import { useEffect, useState } from "react";

function ReactionContainer() {

    const [pokemonList, setPokemonList] = useState([]);
    const [dummyList, setDummyList] = useState([]);

    useEffect(() => {
        let dummyData = [
            {
                "id": 1,
                "name": "Bulbasaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            },
            {
                "id": 2,
                "name": "Ivysaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            },

            {
                "id": 3,
                "name": "Venusaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            }
        ]

        setDummyList(dummyData);
        setPokemonList(dummyData);
    }, []);


    const filterPokemon = (e) => {
        let text = e.target.value.toLowerCase();
        let pokemon = pokemonList;

        let search = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(text));

        setDummyList(search);

    }


    return (
        <div className="pokemon-container">
            <h2 className="pokemon-title">Pokemon List</h2>
            <div className="pokemon-search">
                <input type="text" placeholder="Search Pokemon" onChange={filterPokemon} />
            </div>
            {

                dummyList.length == 0 ? (
                    <h2>Finns inga pokemons</h2> 
                ) : (
                //Item == en pokemon i dummyList
                //Map loopar igenom alla
                //Varv 1 -> item === dummyList[0]
                //Varv 2 -> item === dummyList[1]
                //Varv 3 -> item === dummyList[2]
                dummyList.map( (item, index) => {
                 return(
                    <Reaction 
                        Key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image + "/" + item.id + ".png"}
                        />
                    );    
                })
            )
                /*
                dummyList.length > 0 && (
                <Reaction 
                id={dummyList[0].id} 
                name={dummyList[0].name} 
                image={dummyList[0].image + "/" + dummyList[0].id + ".png"}
                />
                )

                */

                /*
                    // Alternativ lösning med spread-operatorn om bild-ID:t
                    // är hårdkodat i dummydata, exempelvis /1.png.
                    <Reaction {...dummyList[0]} />
                */
            }

        </div>
    );
}

export default ReactionContainer;