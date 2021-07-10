import React from "react";
import TravelerInputForm from '../form/TravelerInputForm';

function Payment() {
    return (
        <div>
            <TravelerInputForm title="여행자" number={1} subTitle="예약하시는 모든 분의 정보를 여권상과 동일하게 기입해 주시기 바랍니다."/>
        </div>
    );
}

export default Payment;