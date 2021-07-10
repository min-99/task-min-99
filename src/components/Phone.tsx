import React from "react";
import styled from 'styled-components';

import {SFlexDiv} from '../style/common';

interface Phone {
    selectValue: string,
    value: string
}

const SPhone = styled.div`
    width: 100%;

    & .phoneTitle {
        font-size: 12px;
        font-weight: normal;
        letter-spacing: -0.055em;
        padding: 5px 0px;
    }

    & select {
        padding : 5px;
        width: 30%;
        height: fit-content;
    }  

    & input {
        padding : 5px;
        width: 100%;
    }  

    & select + input {
        margin-left : 15px;
    }
`;

function Phone ({selectValue, value}: Phone) {
    return (
        <SPhone>
            <div className="phoneTitle">핸드폰 번호</div>
            <SFlexDiv>
                <select>
                    <option value={82}>+82 (대한민국)</option>
                </select>
                <input name="phoneNumber" placeholder="'-'없이 입력해 주세요." value={value}></input>
            </SFlexDiv>  
        </SPhone>
    );
}



export default Phone;