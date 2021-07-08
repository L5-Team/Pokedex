// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./test.css";

// export default function Cards() {
//     const [pokemon, setPokemon] = useState("cinderace ");
//     const [pokemonData, setPokemonData] = useState([]);
//     const [pokemonType, setPokemonType] = useState("");

//     const getPokemon = async () => {
//         const pokemonArray = [];
//         try {
//             const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//             const res = await axios.get(url);
//             pokemonArray.push(res.data);
//             setPokemonType(res.data.types[0].type.name);
//             setPokemonData(pokemonArray);
//             console.log(res);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const handleChange = (e) => {
//         setPokemon(e.target.value.toLowerCase());
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         getPokemon();
//     };

//     return (
//         <div className="app">
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     <input
//                         type="text"
//                         onChange={handleChange}
//                         placeholder="Enter Pokemon Name"
//                     />
//                 </label>
//             </form>
//             {pokemonData.map((data) => {
//                 return (
//                     <div className="container">
//                         <img src={data.sprites["front_default"]} />
//                         <div className="Table">
//                             <div className="TableBody">
//                                 <div className="TableRow">
//                                     <div className="TableCell">Type</div>
//                                     <div className="TableCell">
//                                         {pokemonType}
//                                     </div>
//                                 </div>
//                                 <div className="TableRow">
//                                     <div className="TableCell">Height</div>
//                                     <div className="TableCell">
//                                         {data.height}
//                                     </div>
//                                 </div>
//                                 <div className="TableRow">
//                                     <div className="TableCell">Weight</div>
//                                     <div className="TableCell">
//                                         {data.weight}
//                                     </div>
//                                 </div>
//                                 <div className="TableRow">
//                                     <div className="TableCell">Type</div>
//                                     <div className="TableCell">
//                                         {pokemonType}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }
