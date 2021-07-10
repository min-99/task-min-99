import React from "react";
import styled from 'styled-components';

import Input from '../components/Input';
import Phone from '../components/Phone';
import {STitle, SFormContent, SForm, SRow} from '../style/common';


function PhoneInputForm () {
    return (
        <SForm>
            <STitle>상세 핸드폰 정보</STitle>

            <SFormContent>
                <SRow>
                    <Input title="사용자 이름" name="userName" placeholder="탁민주" value=""></Input>
                </SRow> 

                <SRow>
                    <Phone selectValue="82" value=""></Phone>
                </SRow> 
            </SFormContent>
            
        </SForm>
    );
}

export default PhoneInputForm;