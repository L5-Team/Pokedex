import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import { TextField, InputAdornment } from "@material-ui/core";
import {
    HeaderArea,
    LogoHeader,
    SearchHeader,
    SearchLogo,
    CardArea,
    PokemonTitle,
    PokemonIcon,
    PokemonDesc,
    PokemonType,
} from "./styled";
import logo from "../../assets/images/plogo.png";
import pokeball from "../../assets/images/pokeball.png";

export default function Home() {
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);

    const getPokemon = async () => {
        const pokemonArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            pokemonArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(pokemonArray);
        } catch (e) {
            alert("Digite um nome valido!");
            console.log(e);
        }
    };

    const getAllPokemon = async () => {
        const allPokemon = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
            const res = await axios.get(url);
            allPokemon.push(res.data["results"]);
            setAllPokemon(allPokemon);
            console.log(allPokemon);
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

    useEffect(() => {
        getAllPokemon();
    }, []);

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
            {pokemonData && (
                <div>
                    {pokemonData.map((data) => {
                        return (
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div
                                        className={`flip-card-front ${pokemonType}`}
                                    >
                                        <h1 className="pokemon-title">
                                            {data.name}
                                        </h1>
                                        <img
                                            className="image"
                                            src={data.sprites["front_default"]}
                                            alt={data.name}
                                        />
                                        <p className="pokemon-type">
                                            {pokemonType}
                                        </p>
                                    </div>
                                    <div
                                        className={`flip-card-back ${pokemonType}`}
                                    >
                                        <h1 className="pokemon-title">
                                            {data.name}
                                        </h1>
                                        <p className="pokemon-description">
                                            Teste description
                                        </p>
                                        <p className="pokemon-type">
                                            {pokemonType}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

      
                <>
                    {allPokemon.map((pokemon) => {
                      <div>{pokemon.name}</div>
                    })}
                </>
            
        </>
    );
}
