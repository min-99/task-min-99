import React from "react";
import styled from 'styled-components';

interface Button {
    title: string, 
    name: string, 
    isActive : boolean,
    onClick : (e : React.MouseEvent<HTMLButtonElement>) => void
}

interface SButtonProps {
    isActive : boolean
}

const SButton = styled.button<SButtonProps>`
    width: 100%;
    background-color: ${(props) => (props.isActive ? '#51ABF3' : 'gray')};
    border: none;
    height: 44px;
    border-radius: 4px;
    color: white;
    font-weight: 700;
`;


function Button ({title, name, isActive, onClick}: Button) {
    return (
        <>
            <SButton type="button" name={name} isActive={isActive} onClick={onClick}>{title}</SButton>
        </>
    );
}

export default Button;