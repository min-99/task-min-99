import React from "react";
import styled from 'styled-components';

import Input from '../components/Input';
import Phone from '../components/Phone';
import {STitle, SFormContent} from '../style/common';

const SPhoneInputForm = styled.div`
    padding : 20px 15px;

    & .row {
        display: inline-flex;
        position: relative;
        width: 100%;
    }

    & .row + .row {
        margin-top : 15px;
    }
`;


function PhoneInputForm () {
    return (
        <SPhoneInputForm>
            <STitle>상세 핸드폰 정보</STitle>

            <SFormContent>
                <div className="row">
                    <Input title="사용자 이름" name="userName" placeholder="탁민주" value=""></Input>
                </div> 

                <div className="row">
                    <Phone selectValue="82" value=""></Phone>
                </div> 
            </SFormContent>
            
        </SPhoneInputForm>
    );
}

export default PhoneInputForm;