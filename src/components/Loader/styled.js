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

export const LoaderArea = styled.div`
    min-height: 88vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        cursor: pointer;
        height: 45px;
        /* animation: ${rotate} 1.5s linear infinite; */
    }
`;
