import { Link } from "react-router-dom";

function Instructions(){
    return ( 
        <div className="single-view">
            <h1>How to View a single Pokémon</h1>
            <p>Please select a valid Pokémon ID between 1 and 1025. For example <Link to="/view/1">Bulbasaur</Link></p>
        </div>
    );
}

export default Instructions;