import Styled, { keyframes } from 'styled-components';

/* 
* ANIMATIONSSSS!!!
*/

const Loukura = keyframes`
    0% {
        background: #d81b60;
        transform: rotate(0deg);
    } 20% {
        background: #ba68c8;
        transform: rotate(72deg);
    } 40% {
        background: #212121;
        transform: rotate(144deg);
    } 60% {
        background: #2196f3;
        transform: rotate(216deg);
    } 80% {
        background: #26a69a;
        transform: rotate(288deg);
    } 100% {
        background: #d81b60;
        transform: rotate(360deg);
    }
`;
const Loukurinha = keyframes`
    0% {
        background: #d81b60;
    } 20% {
        background: #ba68c8;
    } 40% {
        background: #212121;
    } 60% {
        background: #2196f3;
    } 80% {
        background: #26a69a;
    } 100% {
        background: #d81b60;
    }
`;

export const Container = Styled.div`
    padding: 30px 65px;
    height: 80vh;
    animation: ${Loukurinha} 10s linear infinite forwards;
`;

export const Titulo = Styled.h1`
    color: #424242;
    text-align: center;
    font-family: 'Sans-serif';
    margin-bottom: 140px;
`;

export const BolaAleatoria = Styled.div`
    width: 130px;
    height: 130px;
    border-radius: 10px;
    background: #212121;
    animation: ${Loukura} 2s linear infinite forwards;
    margin: 0px auto;
`;
