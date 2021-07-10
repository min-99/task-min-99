import React from "react";
import styled from 'styled-components';

import TextArea from '../components/TextArea';

import {STitle, SFormContent, SForm, SRow} from '../style/common';


function EtcInputForm () {
    return (
        <SForm>
            <STitle>기타 예약 정보</STitle>

            <SFormContent>
                <SRow>
                    <TextArea placeholder="답변을 입력해 주세요." value=""></TextArea>
                </SRow>  
            </SFormContent>
            
        </SForm>
    );
}

export default EtcInputForm;