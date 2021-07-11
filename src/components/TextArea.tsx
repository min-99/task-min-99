import React,{forwardRef} from "react";
import styled from 'styled-components';
import { errorType } from "../type";

import {SErrorMessage} from '../style/common';

interface TextArea {
    name : string,
    placeholder: string,
    value: string,
    error : errorType,
    onChange : (e : React.ChangeEvent<HTMLTextAreaElement>) => void
}

const STextArea = styled.div`
    width: 100%;

    & + & {
        margin-left: 15px;
    }

    & .TextAreaTitle {
        font-size: 12px;
        font-weight: normal;
        letter-spacing: -0.055em;
        padding: 5px 0px;
    }

    & textarea {
        padding: 5px;
        width: 100%;
        height: 90px;
        resize: none;
    }

    
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextArea>((props, ref) => {
    const { name, placeholder, value, error, onChange } = props;
    return (
        <STextArea>
            <div className="TextAreaTitle">오시는 교통 수단을 적어주세요.</div>
            <textarea name={name} className={error ? 'error' : ''} placeholder={placeholder} ref={ref} onChange={onChange} value={value}></textarea>
            {error && <SErrorMessage>{error}</SErrorMessage>}
        </STextArea>
    );
})

export default TextArea;