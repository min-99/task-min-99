import React from "react";
import styled from 'styled-components';

interface Select {
    title: string, 
    name: string,
    option: Array<string>, 
    selectValue: string
}


const SSelect = styled.div`
    width: 100%;

    & .selectTitle {
        font-size: 12px;
        font-weight: normal;
        letter-spacing: -0.055em;
        padding: 5px 0px;
    }

    & .selectContainer {
        border: 1px solid lightslategrey;
        display: inline-flex;
        width: 100%;

        border: 0.2px solid lightslategrey;
        border-radius: 4px;
        height: 35px;

        & div {
            padding: 5px;
            width: 100%;
            text-align: center;
        }

        & div.select {
            background-color : deepskyblue;
        }

        & div + div {
            border-left: 1px solid lightslategrey;
        }
    }
`;

function Select({title, option, selectValue} : Select){
    return (
        <SSelect>
            <div className="selectTitle">{title}</div>
            <div className="selectContainer">
                {option.map((x, index) => <div key={index} className={x === selectValue ? 'select' : ''}>{x}</div>)}
            </div>
        </SSelect>
    );
}

export default Select;