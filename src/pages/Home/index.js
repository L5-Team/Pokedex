import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, InputAdornment } from "@material-ui/core";
import { HeaderArea, LogoHeader, SearchHeader, SearchLogo } from "./styled";
import logo from "../../assets/images/plogo.png";
import pokeball from "../../assets/images/pokeball.png";

export default function Home() {
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = async () => {
        const pokemonArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            pokemonArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(pokemonArray);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };

    return (
        <>
            <HeaderArea>
                <LogoHeader>
                    <img src={logo} alt="Pokemon Logo" />
                </LogoHeader>
                <SearchHeader onSubmit={handleSubmit}>
                        <TextField
                            onChange={handleChange}
                            autoComplete="off"
                            noValidate
                            label="Busque um Pokémon"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <SearchLogo src={pokeball} />
                                    </InputAdornment>
                                ),
                            }}
                            autoFocus
                        />
                </SearchHeader>
            </HeaderArea>
            <div>
                {pokemonData.map((data) => {
                    return (
                        <div className="container">
                            <img src={data.sprites["front_default"]} />
                            <div className="Table">
                                <div className="TableBody">
                                    <div className="TableRow">
                                        <div className="TableCell">Type</div>
                                        <div className="TableCell">
                                            {pokemonType}
                                        </div>
                                    </div>
                                    <div className="TableRow">
                                        <div className="TableCell">Height</div>
                                        <div className="TableCell">
                                            {data.height}
                                        </div>
                                    </div>
                                    <div className="TableRow">
                                        <div className="TableCell">Weight</div>
                                        <div className="TableCell">
                                            {data.weight}
                                        </div>
                                    </div>
                                    <div className="TableRow">
                                        <div className="TableCell">Type</div>
                                        <div className="TableCell">
                                            {pokemonType}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
