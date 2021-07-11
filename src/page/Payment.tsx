import React, {useCallback, useRef} from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import TravelerInputForm from '../form/TravelerInputForm';
import ArrivalTimeInputForm from '../form/ArrivalTimeInputForm';
import PhoneInputForm from '../form/PhoneInputForm';
import SEtcInputForm from '../form/EtcInputForm';
import TermsForm from '../form/TermsForm';
import Button from '../components/Button';

import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';


const SPayment = styled.div`
    padding : 28px 15px;
`;

function Payment() {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {termsAgree} = state;

    const genderRef = useRef<HTMLInputElement>(null);

    const onClick = useCallback((e : React.MouseEvent<HTMLElement>) => {
        let isEnd = false;
        if (state.traveler.gender.value === ""){
            dispatch({type : 'SET_TRAVELER_INPUT', name : "gender" , value: state.traveler.gender.value, error : "성별을 선택해 주세요."});
            genderRef.current?.focus();
            isEnd = true;
        }

        if (state.arrivalTime.hour === null || state.arrivalTime.minute === null){
            dispatch({type : 'SET_ARRIVAL_TIME_ERROR', error : "숙소 도착 예정 시간을 선택해주세요."});
            isEnd = true;
        }

        if (isEnd)
            return false;

        // 검증이 완료되었는지 확인
        alert("예약이 완료 되었습니다.");

    }, [state]);

    return (
        <SPayment>
            <TravelerInputForm title="여행자" subTitle="예약하시는 모든 분의 정보를 여권상과 동일하게 기입해 주시기 바랍니다." genderRef={genderRef}/>
            <ArrivalTimeInputForm/>
            <PhoneInputForm/>
            <SEtcInputForm/>
            <TermsForm/>

            <Button title="결제하기" name="payment" isActive={termsAgree.agree1 && termsAgree.agree2} onClick={onClick}/>
        </SPayment>
    );
}

export default Payment;