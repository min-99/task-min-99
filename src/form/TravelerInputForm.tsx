import React, {useCallback, useEffect, useRef} from "react";

import Input from '../components/Input';
import SelectBox from '../components/SelectBox';

import {STitle, SSubTitle, SFormContent, SForm, SRow} from '../style/common';
import { errorType } from "../type";

import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';


interface TravelerInputForm{
    title: string,
    subTitle?: string | undefined,
    genderRef : React.RefObject<HTMLInputElement>
}

function TravelerInputForm ({title, subTitle, genderRef} : TravelerInputForm) {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {traveler} = state;

    // change
    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let error : errorType = validation(name, value);

        dispatch({type : 'SET_TRAVELER_INPUT', name , value, error});
    }, []);

    const onClick = useCallback((e : React.MouseEvent<HTMLElement>) => {
        const {value} = e.currentTarget.dataset;

        dispatch({type : 'SET_TRAVELER_INPUT', name : "gender" , value : value ?? '', error : null});
    }, []);

    const validation = useCallback((name: string, value : string) : errorType => {
        let error : errorType = null;

        // 검증 로직
        switch(name){
            case 'englishLastName' : 
            case 'englishFirstName' : 
                if(value.length < 2){
                    error = "최소 2자 이상 입력해주세요.";
                }else if(value.length > 20){
                    error = "최대 20자까지 입력 가능합니다.";
                }else if(!/^[a-zA-Z\s]+$/.test(value)){
                    error = "영어와 띄어쓰기만 입력 가능합니다.";
                }
            break;
            case 'koreanName' : 
                if(value.length < 2){
                    error = "최소 2자 이상 입력해주세요.";
                }else if(value.length > 20){
                    error = "최대 20자까지 입력 가능합니다.";
                }else if(!/^[가-힣]+$/.test(value)){
                    error = "한글만 입력 가능합니다.";
                }
                break;
            case 'birthday' : 
                if(value.length < 6){
                    error = "6자리의 생년월일을 입력해 주세요.(YYMMDD)";
                }else if(!/^[0-9]+$/.test(value)){
                    error = "숫자(0~9)만 입력 가능합니다.";
                }
        }

        return error;
    }, []);

    const englishLastNameRef = useRef<HTMLInputElement>(null);
    const englishFirstNameRef = useRef<HTMLInputElement>(null);
    const koreanNameRef = useRef<HTMLInputElement>(null);
    const birthdayRef = useRef<HTMLInputElement>(null);

    
    useEffect(() => {
        englishLastNameRef.current?.focus();
    }, []);

    return (
        <SForm>
            <STitle>{title}</STitle>
            {subTitle && <SSubTitle>{subTitle}</SSubTitle>}

            <SFormContent>
                <SRow>
                    <Input title="영문 이름" name="englishLastName" placeholder="Min Ju" value={traveler.englishLastName.value} error={traveler.englishLastName.error} ref={englishLastNameRef} onChange={onChange}></Input>
                    <Input title="영문 성" name="englishFirstName" placeholder="Tak" value={traveler.englishFirstName.value} error={traveler.englishFirstName.error} ref={englishFirstNameRef} onChange={onChange}></Input>
                </SRow> 

                <SRow>
                    <Input title="한글 이름" name="koreanName" placeholder="탁민주" value={traveler.koreanName.value} error={traveler.koreanName.error} ref={koreanNameRef} onChange={onChange}></Input>
                </SRow> 

                <SRow>
                    <SelectBox title="성별" name="gender" option={['남', '여']} selectValue={traveler.gender.value} error={traveler.gender.error} onClickHandle={onClick} ref={genderRef}></SelectBox>
                </SRow> 

                <SRow>
                    <Input title="생년월일" name="birthday" placeholder="990425" value={traveler.birthday.value} error={traveler.birthday.error} ref={birthdayRef} onChange={onChange}></Input>
                </SRow> 
            </SFormContent>    
        </SForm>   
    );
}

export default TravelerInputForm;