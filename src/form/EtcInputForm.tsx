import React, {useCallback} from "react";

import TextArea from '../components/TextArea';

import {STitle, SFormContent, SForm, SRow} from '../style/common';
import {errorType} from '../type';
import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';


function EtcInputForm () {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {etcInfo} = state;

    const onChange = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let error : errorType = null;

        // 검증 로직
        switch(name){
            case 'etcInfo' : 
                if(value.length === 0){
                    error = "기타 예약 정보를 입력해주세요.";
                }else if(value.length > 200){
                    error = "최대 200자까지 입력 가능합니다.";
                }
                break;
        }

        dispatch({type : 'SET_ETC_INFO_TIME', name , value, error : error});
    }, []);

    return (
        <SForm>
            <STitle>기타 예약 정보</STitle>

            <SFormContent>
                <SRow>
                    <TextArea name="etcInfo" placeholder="답변을 입력해 주세요." error={etcInfo.error} value={etcInfo.value} onChange={onChange}></TextArea>
                </SRow>  
            </SFormContent>
            
        </SForm>
    );
}

export default EtcInputForm;