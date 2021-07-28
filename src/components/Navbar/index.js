import React from "react";
// import axios from "axios";
// import "./home.css";
import { TextField, InputAdornment, Grid } from "@material-ui/core";
import {
    HeaderArea,
    LogoHeader,
    SearchHeader,
    SearchLogo,
    // CardArea,
    // PokemonTitle,
    // PokemonIcon,
    // PokemonDesc,
    // PokemonType,
} from "./styled";
import logo from "../../assets/images/plogo.png";
import pokeball from "../../assets/images/pokeball.png";

export default function Navbar() {
    // const [pokemon, setPokemon] = useState("");
    // const [pokemonData, setPokemonData] = useState([]);
    // const [pokemonType, setPokemonType] = useState("");
    // const [allPokemon, setAllPokemon] = useState([]);

    // const getPokemon = async () => {
    //     const pokemonArray = [];
    //     try {
    //         const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    //         const res = await axios.get(url);
    //         pokemonArray.push(res.data);
    //         setPokemonType(res.data.types[0].type.name);
    //         setPokemonData(pokemonArray);
    //     } catch (e) {
    //         alert("Digite um nome valido!");
    //         console.log(e);
    //     }
    // };

    // const getAllPokemon = async () => {
    //     const allPokemon = [];
    //     try {
    //         const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    //         const res = await axios.get(url);
    //         allPokemon.push(res.data["results"]);
    //         setAllPokemon(allPokemon);
    //         console.log(allPokemon);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // const handleChange = (e) => {
    //     setPokemon(e.target.value.toLowerCase());
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     getPokemon();
    // };

    // useEffect(() => {
    //     getAllPokemon();
    // }, []);

    return (
        <>
            <HeaderArea>
                <Grid container >
                    <Grid item xs={6} md={8}>
                        <LogoHeader>
                            <img src={logo} alt="Pokemon Logo" />
                        </LogoHeader>
                    </Grid>
                    <SearchHeader
                    // onSubmit={handleSubmit}
                    >
                        <Grid item xs={12} md={12}>
                            <TextField
                                // onChange={handleChange}
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
                        </Grid>
                    </SearchHeader>
                </Grid>
            </HeaderArea>
        </>
    );
}
