import styled, { keyframes } from "styled-components";
// Animations

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const shake = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

// const flip = keyframes `
//     0% {transform: scaleX(-1);}
//     50% {transform: scaleX(1);}
//     100% {transform: scaleX(-1);}
// `;

// Header Items

export const HeaderArea = styled.div`
    height: 12vh;
    display: flex;
    background-color: #f9cc02;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 20vh;
    }
`;

export const LogoHeader = styled.div`
    display: flex;
    flex: 1;
    margin-left: 80px;
    align-items: center;

    @media (max-width: 1023px) and (min-width: 768px) {
        margin-left: 80px;
    }

    /* @media (max-width: 767) {
        padding: 20px;
        background-color: blue;
    } */

    img {
        height: 80px;

            &:hover {
                animation: ${shake} 1s infinite;
            }
    }
`;

export const SearchHeader = styled.form`
    display: flex;
    align-items: center;
    width: 24vw;
    margin-right: 80px;

    @media (max-width: 1023px) and (min-width: 768px) {
        width: 38vw;
    }

    /* @media (max-width: 767) {
        width: 100% !important;
    } */
`;

export const SearchLogo = styled.img`
    cursor: pointer;
    height: 20px;
    animation: ${rotate} 1.5s linear infinite;
`;

// Pokemon Cards items

export const CardArea = styled.div`
    display: grid;
    max-width: 18vw;
    height: 230px;
    background-color: red;
    justify-content: center;
    align-items: column;
    padding: 0 20px 20px 20px;

`;

export const PokemonTitle = styled.p`
    display: flex;
    justify-content: center;

`; 

export const PokemonIcon = styled.img`
    background-color: blue;
`; 

export const PokemonDesc = styled.span`
    background-color: yellow;
`; 

export const PokemonType = styled.span`
    background-color: green;
`; 