import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
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
                    <FormControl
                        variant="filled"
                        style={{ minWidth: 180 }}
                    >
                        <InputLabel>
                        Filtrar por Região
                        </InputLabel>
                        <Select
                            native
                            value={option1}
                            onChange={handleChange1}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </FilterItem>
                <FilterItem>
                    <FormControl
                        variant="filled"
                        style={{ minWidth: 180 }}
                    >
                        <InputLabel>
                        Filtrar por Tipo
                        </InputLabel>
                        <Select
                            native
                            value={option2}
                            onChange={handleChange2}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </FilterItem>
            </FilterArea>
        </>
    );
}
