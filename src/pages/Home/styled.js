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

// Header Items

export const HeaderArea = styled.div`
    height: 12vh;
    display: flex;
    background-color: gray;

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

            /* @media (max-width: 767) {
                padding: 20px;
            } */
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

export const SearchLogo = styled.img `
    cursor: pointer;
    height: 20px;
    animation: ${rotate} 1.5s linear infinite;
`;
