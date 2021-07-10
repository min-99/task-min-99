import React from "react";
import styled from 'styled-components';

interface Button {
    title: string, 
    name: string, 
}

const SButton = styled.button`
    width: 100%;
    background-color: #51ABF3;
    border: none;
    height: 44px;
    border-radius: 4px;
    color: white;
    font-weight: 700;
`;


function Button ({title, name}: Button) {
    return (
        <>
        <SButton type="button" name={name}>{title}</SButton>
        </>
    );
}

export default Button;