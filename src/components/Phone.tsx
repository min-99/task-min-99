import React from "react";
import styled from 'styled-components';

import {SFlexDiv, SErrorMessage} from '../style/common';
import { errorType } from "../type";

interface Phone {
    InternationalNumber: string,
    phoneNumber: string,
    error : errorType,
    phoneNumberRef : React.RefObject<HTMLInputElement>,
    onChangePhoneNumber : (e: React.ChangeEvent<HTMLInputElement>) => void
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

function Phone ({InternationalNumber, phoneNumber, error, phoneNumberRef, onChangePhoneNumber}: Phone) {
    return (
        <SPhone>
            <div className="phoneTitle">핸드폰 번호</div>
            <SFlexDiv>
                <select defaultValue={InternationalNumber}>
                    <option value="82">+82 (대한민국)</option>
                </select>
                <input name="phoneNumber" className={error ? 'error' : ''} placeholder="'-'없이 입력해 주세요." value={phoneNumber} ref={phoneNumberRef} onChange={onChangePhoneNumber}></input>
            </SFlexDiv>  
            {error && <SErrorMessage>{error}</SErrorMessage>}
        </SPhone>
    );
}



export default Phone;