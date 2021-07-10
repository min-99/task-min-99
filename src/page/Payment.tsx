import React from "react";
import styled from 'styled-components';

import TravelerInputForm from '../form/TravelerInputForm';
import ArrivalTimeInputForm from '../form/ArrivalTimeInputForm';
import PhoneInputForm from '../form/PhoneInputForm';
import SEtcInputForm from '../form/EtcInputForm';
import TermsForm from '../form/TermsForm';
import Button from '../components/Button';

const SPayment = styled.div`
    padding : 28px 15px;
`;

function Payment() {
    return (
        <SPayment>
            <TravelerInputForm title="여행자" number={1} subTitle="예약하시는 모든 분의 정보를 여권상과 동일하게 기입해 주시기 바랍니다."/>
            <ArrivalTimeInputForm/>
            <PhoneInputForm/>
            <SEtcInputForm/>
            <TermsForm/>

            <Button title="결제하기" name="payment"/>
        </SPayment>
    );
}

export default Payment;