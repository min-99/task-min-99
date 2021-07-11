import {travelerType, arrivalTimeType, phoneDetailType, etcInfoType, termsAgreeType, PaymentStateType} from '../type';

export const initalTraveler : travelerType = {
    englishLastName : {
        value : "",
        error : null
    },
    englishFirstName : {
        value : "",
        error : null
    },
    koreanName : {
        value : "",
        error : null
    },
    gender : {
        value : "",
        error : null
    },
    birthday : {
        value : "",
        error : null
    }
}

export const initalArrivalTime : arrivalTimeType = {
    hour : null,
    minute : null,
    error : null
}

export const initalPhoneDetail : phoneDetailType = {
    userName : {
        value : '',
        error : null
    },
    InternationalNumber : '82',
    phoneNumber : {
        value : '',
        error : null
    },
}

export const initalEtcInfo : etcInfoType= {
    value : '', 
    error : null
}

export const initalTermsAgreee : termsAgreeType = {
    agree1 : false,
    agree2 : false
}

export const initialPaymentState : PaymentStateType = {
    traveler : initalTraveler,
    arrivalTime : initalArrivalTime,
    phoneDetail : initalPhoneDetail,
    etcInfo : initalEtcInfo,
    termsAgree : initalTermsAgreee,
    PaymentBtn : false,
};