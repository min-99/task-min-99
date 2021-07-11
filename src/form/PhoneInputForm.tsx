import React, {useRef, useCallback} from "react";

import Input from '../components/Input';
import Phone from '../components/Phone';
import {STitle, SFormContent, SForm, SRow} from '../style/common';

import {errorType} from '../type';
import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';


function PhoneInputForm () {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {phoneDetail} = state;

    // change
    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let error : errorType = null;

        // 검증 로직
        switch(name){
            case 'userName' : 
                if(value.length < 2){
                    error = "최소 2자 이상 입력해주세요.";
                }else if(value.length > 20){
                    error = "최대 20자까지 입력 가능합니다.";
                }else if(!/^[a-zA-Z\s]+$/.test(value)){
                    error = "영어와 띄어쓰기만 입력 가능합니다.";
                }
                break;
            case 'phoneNumber' : 
                if(value.length < 2){
                    error = "최소 2자 이상 입력해주세요.";
                }else if(value.length > 20){
                    error = "최대 20자까지 입력 가능합니다.";
                }else if(!/^[0-9]+$/.test(value)){
                    error = "숫자(0~9)만 입력 가능합니다.";
                }
            break;
        }

        dispatch({type : 'SET_PHONE_DETAIL_TIME', name , value, error : error});
    }, []);

    const userNameRef = useRef<HTMLInputElement>(null);

    return (
        <SForm>
            <STitle>상세 핸드폰 정보</STitle>

            <SFormContent>
                <SRow>
                    <Input title="사용자 이름" name="userName" placeholder="탁민주" value={phoneDetail.userName.value} error={phoneDetail.userName.error} ref={userNameRef} onChange={onChange}/>
                </SRow> 

                <SRow>
                    <Phone InternationalNumber={phoneDetail.InternationalNumber} phoneNumber={phoneDetail.phoneNumber.value} error={phoneDetail.phoneNumber.error} onChangePhoneNumber={onChange}></Phone>
                </SRow> 
            </SFormContent>
            
        </SForm>
    );
}

export default PhoneInputForm;