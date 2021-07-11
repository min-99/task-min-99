import React,{forwardRef} from "react";
import styled from 'styled-components';

import {SErrorMessage} from '../style/common';
import { errorType } from "../type";

interface SelectBox {
    title: string, 
    name: string,
    option: Array<string>, 
    selectValue: string,
    error : errorType
    onClickHandle : (e: React.MouseEvent<HTMLElement> ) => void
}


const SSelectBox = styled.div`
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

        &.error{
            border: 1px solid red;
        }

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

const SelectBox = forwardRef<HTMLDivElement, SelectBox>((props, ref) => {
    const {title, name, option, selectValue, error, onClickHandle} = props;
    return (
        <SSelectBox>
            <div className="selectTitle">{title}</div>
            <div className={`selectContainer${error ? ' error' : ''}`} ref={ref}>
                {option.map((x : string, index : number) => <div key={index} data-value={x} data-name={name} data-select={x === selectValue} className={x === selectValue ? 'select' : ''} onClick={onClickHandle}>{x}</div>)}
            </div>
            {error && <SErrorMessage>{error}</SErrorMessage>}
        </SSelectBox>
    );
})

export default SelectBox;