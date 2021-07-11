/* eslint-disable array-callback-return */
/* eslint-disable no-eval */
import React, {useCallback, useRef, useEffect} from "react";
import styled from 'styled-components';

import TravelerInputForm from '../form/TravelerInputForm';
import ArrivalTimeInputForm from '../form/ArrivalTimeInputForm';
import PhoneInputForm from '../form/PhoneInputForm';
import EtcInputForm from '../form/EtcInputForm';
import TermsForm from '../form/TermsForm';
import Button from '../components/Button';

import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';
import {travelerValidation, phoneDetailValidation, etcInfoValidation} from '../utill/validation';


const SPayment = styled.div`
    padding : 28px 15px;
`;

function Payment() {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {termsAgree} = state;

    // Ref
    const englishLastNameRef = useRef<HTMLInputElement>(null);
    const englishFirstNameRef = useRef<HTMLInputElement>(null);
    const koreanNameRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLInputElement>(null);
    const birthdayRef = useRef<HTMLInputElement>(null);

    const arrivalTimeRef = useRef<HTMLSelectElement>(null);

    const userNameRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);

    const etcInfoRef = useRef<HTMLTextAreaElement>(null);

    const onClick = useCallback((e : React.MouseEvent<HTMLElement>) => {
        let isEnd = false;
        let error = null;

        const travelerTarget = ['englishLastName', 'englishFirstName', 'koreanName', 'gender', 'birthday'];
        type travelerKeyType = 'englishLastName'| 'englishFirstName'| 'koreanName'| 'gender'| 'birthday';

        // 여행자 정보 검증
        travelerTarget.map((x : string) => {
            error = travelerValidation(x, state.traveler[(x as travelerKeyType)].value);
            if (error !== null){
                dispatch({type : 'SET_TRAVELER_INPUT', name : x , value: state.traveler[(x as travelerKeyType)].value, error});
                if(isEnd === false){ // 맨처음 포커스
                    eval(`${x}Ref`).current?.focus();
                }
                isEnd = true;
            }
        })

        // 숙소 도착예정 시간
        if (state.arrivalTime.hour === null || state.arrivalTime.minute === null){
            dispatch({type : 'SET_ARRIVAL_TIME_ERROR', error : "숙소 도착 예정 시간을 선택해주세요."});
            isEnd = true;
            arrivalTimeRef.current?.focus();
        }

        // 상세 핸드폰 정보
        const phoneDetailTarget = ['userName', 'phoneNumber'];
        type phoneDetailKeyType = 'userName'| 'phoneNumber';
        phoneDetailTarget.map((x : string)  => {
            error = phoneDetailValidation(x, state.phoneDetail[(x as phoneDetailKeyType)].value);
            if (error !== null){
                dispatch({type : 'SET_PHONE_DETAIL', name : x , value: state.phoneDetail[(x as phoneDetailKeyType)].value, error});
                if(isEnd === false){ // 맨처음 포커스
                    eval(`${x}Ref`).current?.focus();
                }
                isEnd = true;
            }
        })

        // 기타 예약정보
        error = etcInfoValidation('etcInfo', state.etcInfo.value);
        if (error !== null){
            dispatch({type : 'SET_ETC_INFO', name: 'etcInfo', value : state.etcInfo.value , error});
            if(isEnd === false){ // 맨처음 포커스
                etcInfoRef.current?.focus();
            }
            isEnd = true;
        }


        if (isEnd){
            return false;
        }

        // 검증이 완료되었는지 확인
        alert("예약이 완료 되었습니다.");
        return true;

    }, [dispatch, state.arrivalTime.hour, state.arrivalTime.minute, state.etcInfo.value, state.phoneDetail, state.traveler]);

    useEffect(() => {
        englishLastNameRef.current?.focus();
    }, []);

    return (
        <SPayment>
            <TravelerInputForm title="여행자" subTitle="예약하시는 모든 분의 정보를 여권상과 동일하게 기입해 주시기 바랍니다." 
                englishLastNameRef={englishLastNameRef}
                englishFirstNameRef={englishFirstNameRef}
                koreanNameRef={koreanNameRef}    
                genderRef={genderRef} 
                birthdayRef={birthdayRef}
            />
            <ArrivalTimeInputForm arrivalTimeRef={arrivalTimeRef}/>
            <PhoneInputForm userNameRef={userNameRef} phoneNumberRef={phoneNumberRef}/>
            <EtcInputForm etcInfoRef={etcInfoRef}/>
            <TermsForm/>

            <Button title="결제하기" name="payment" isActive={termsAgree.agree1 && termsAgree.agree2} onClick={onClick}/>
        </SPayment>
    );
}

export default Payment;