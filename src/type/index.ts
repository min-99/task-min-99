export type errorType = string | null;

export interface travelerType {
    englishLastName : {
        value : string,
        error : errorType
    },
    englishFirstName : {
        value : string,
        error : errorType
    },
    koreanName : {
        value : string,
        error : errorType
    },
    gender : {
        value : string,
        error : errorType
    },
    birthday : {
        value : string,
        error : errorType
    }
}

export interface arrivalTimeType {
    hour : number | null,
    minute : number | null,
    error : errorType
}

export interface phoneDetailType {
    userName : {
        value : string,
        error : errorType
    },
    InternationalNumber : '82', // 현재는 82만 가질 수 있도록 고정한다
    phoneNumber : {
        value : string,
        error : errorType
    },
}


export interface etcInfoType {
    value : string,
    error : errorType
}


export interface termsAgreeType {
    agree1 : boolean
    agree2 : boolean
}


export interface PaymentStateType {
    traveler : travelerType,
    arrivalTime : arrivalTimeType,
    phoneDetail : phoneDetailType,
    etcInfo : etcInfoType,
    termsAgree : termsAgreeType,
    PaymentBtn : boolean
}