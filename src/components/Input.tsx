import React, {forwardRef} from "react";
import styled from 'styled-components';

import {SErrorMessage} from '../style/common';

interface Input {
    title: string, 
    name: string, 
    placeholder: string,
    value: string,
    error : string | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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

const Input = forwardRef<HTMLInputElement, Input>((props, ref) => {
    const {title, name, placeholder, value, error, onChange} = props;

    return (
        <SInput>
            <div className="inputTitle">{title}</div>
            <input name={name} className={error ? 'error' : ''} placeholder={placeholder} value={value} ref={ref} onChange={onChange}></input>
            {error && <SErrorMessage>{error}</SErrorMessage>}
        </SInput>
    );
})


export default Input;