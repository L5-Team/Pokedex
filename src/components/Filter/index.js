import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import { FilterArea, FilterItem } from "./styled";

export default function Filter() {
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");

    const handleChange1 = (event) => {
        setOption1(event.target.value);
    };

    const handleChange2 = (event) => {
        setOption2(event.target.value);
    };
    return (
        <>
            <FilterArea>
                <FilterItem>
                    <FormControl variant="filled" style={{ minWidth: 180 }}>
                        <InputLabel id="demo-simple-select-filled-label">
                            Filtrar por Região
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={option1}
                            onChange={handleChange1}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </FilterItem>
                <FilterItem>
                    <FormControl variant="filled" style={{ minWidth: 180 }}>
                        <InputLabel id="demo-simple-select-filled-label">
                            Filtrar por Tipo
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={option2}
                            onChange={handleChange2}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </FilterItem>
            </FilterArea>
        </>
    );
}
