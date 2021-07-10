import React from "react";
import styled from 'styled-components';

interface Input {
    title: string, 
    name: string, 
    placeholder: string,
    value: string
}

const SInput = styled.div`
    width: 100%;

    & + & {
        margin-left: 15px;
    }

    & .inputTitle {
        font-size: 12px;
        font-weight: normal;
        letter-spacing: -0.055em;
        padding: 5px 0px;
    }

    & input {
        padding : 5px;
        width: 100%;
    }

    
`;

function Input ({title, name, placeholder, value}: Input) {
    return (
        <SInput>
            <div className="inputTitle">{title}</div>
            <input name={name} placeholder={placeholder} value={value}></input>
        </SInput>
    );
}



export default Input;