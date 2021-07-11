import React, {useCallback} from "react";

import TextArea from '../components/TextArea';

import {STitle, SFormContent, SForm, SRow} from '../style/common';
import {errorType} from '../type';
import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';
import {etcInfoValidation} from '../utill/validation';

interface EtcInputForm{
    etcInfoRef : React.RefObject<HTMLTextAreaElement>,
}

function EtcInputForm ({etcInfoRef} : EtcInputForm) {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {etcInfo} = state;

    const onChange = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let error : errorType = etcInfoValidation(name, value);
   
        dispatch({type : 'SET_ETC_INFO', name , value, error : error});
    }, [dispatch]);

    return (
        <SForm>
            <STitle>기타 예약 정보</STitle>

            <SFormContent>
                <SRow>
                    <TextArea name="etcInfo" placeholder="답변을 입력해 주세요." error={etcInfo.error} value={etcInfo.value} ref={etcInfoRef} onChange={onChange}></TextArea>
                </SRow>  
            </SFormContent>
            
        </SForm>
    );
}

export default EtcInputForm;