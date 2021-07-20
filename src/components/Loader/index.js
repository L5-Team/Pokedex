import React from "react";
import { LoaderArea } from "./styled";
import loader from "../../assets/images/loader.gif";

export default function Loader() {
    return (
        <LoaderArea>
            <img src={loader} alt="Pokemon Logo" />
            <h1 className="loader--text">Loading...</h1>
        </LoaderArea>
    );
}
