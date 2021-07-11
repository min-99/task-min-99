import React, {useCallback} from "react";

import Input from '../components/Input';
import SelectBox from '../components/SelectBox';

import {STitle, SSubTitle, SFormContent, SForm, SRow} from '../style/common';
import { errorType } from "../type";

import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';
import {travelerValidation} from '../utill/validation';


interface TravelerInputForm{
    title: string,
    subTitle?: string | undefined,
    englishLastNameRef : React.RefObject<HTMLInputElement>,
    englishFirstNameRef : React.RefObject<HTMLInputElement>,
    koreanNameRef : React.RefObject<HTMLInputElement>,
    genderRef : React.RefObject<HTMLInputElement>,
    birthdayRef : React.RefObject<HTMLInputElement>,
}

function TravelerInputForm ({title, subTitle, englishLastNameRef, englishFirstNameRef, koreanNameRef, genderRef, birthdayRef} : TravelerInputForm) {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {traveler} = state;

    // change
    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let error : errorType = travelerValidation(name, value);

        dispatch({type : 'SET_TRAVELER_INPUT', name , value, error});
    }, []);

    const onClick = useCallback((e : React.MouseEvent<HTMLElement>) => {
        const {value} = e.currentTarget.dataset;

        dispatch({type : 'SET_TRAVELER_INPUT', name : "gender" , value : value ?? '', error : null});
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