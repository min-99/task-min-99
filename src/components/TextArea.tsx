import React from "react";
import styled from 'styled-components';

interface TextArea {
    placeholder: string,
    value: string
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

function TextArea ({ placeholder, value}: TextArea) {
    return (
        <STextArea>
            <div className="TextAreaTitle">오시는 교통 수단을 적어주세요.</div>
            <textarea placeholder={placeholder}>{value}</textarea>
        </STextArea>
    );
}



export default TextArea;