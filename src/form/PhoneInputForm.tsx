import React, {useRef, useCallback} from "react";

import Input from '../components/Input';
import Phone from '../components/Phone';
import {STitle, SFormContent, SForm, SRow} from '../style/common';

import {errorType} from '../type';
import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';
import { phoneDetailValidation } from "../utill/validation";


interface PhoneInputForm {
    userNameRef : React.RefObject<HTMLInputElement>,
    phoneNumberRef : React.RefObject<HTMLInputElement>,
}

function PhoneInputForm ({userNameRef, phoneNumberRef} : PhoneInputForm) {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {phoneDetail} = state;

    // change
    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let error : errorType = phoneDetailValidation(name, value);

        dispatch({type : 'SET_PHONE_DETAIL', name , value, error : error});
    }, []);

    return (
        <SForm>
            <STitle>상세 핸드폰 정보</STitle>

            <SFormContent>
                <SRow>
                    <Input title="사용자 이름" name="userName" placeholder="탁민주" value={phoneDetail.userName.value} error={phoneDetail.userName.error} ref={userNameRef} onChange={onChange}/>
                </SRow> 

                <SRow>
                    <Phone InternationalNumber={phoneDetail.InternationalNumber} phoneNumber={phoneDetail.phoneNumber.value} error={phoneDetail.phoneNumber.error} phoneNumberRef={phoneNumberRef} onChangePhoneNumber={onChange}></Phone>
                </SRow> 
            </SFormContent>
            
        </SForm>
    );
}

export default PhoneInputForm;