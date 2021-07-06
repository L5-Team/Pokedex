import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { HeaderArea, LogoHeader, SearchHeader, SearchLogo } from "./styled";
import logo from "../../assets/images/plogo.png";
import pokeball from "../../assets/images/pokeball.png";
export default function Home() {
    return (
        <>
            <HeaderArea>
                <LogoHeader>
                    <img src={logo} alt="Pokemon Logo" />
                </LogoHeader>
                <SearchHeader>
                    <TextField
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
        </>
    );
}
