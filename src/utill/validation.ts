import {errorType} from '../type';

export const travelerValidation = (name: string, value : string) : errorType => {
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
        case 'gender' : 
            if(value === ""){
                error = "성별을 선택해 주세요.";
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
};

export const phoneDetailValidation = (name: string, value : string) : errorType => {
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

    return error;
};

export const etcInfoValidation = (name: string, value : string) : errorType => {
    let error : errorType = null;

    // 검증 로직
    switch(name){
        case 'etcInfo' : 
            if(value.length === 0){
                error = "기타 예약 정보를 입력해주세요.";
            }else if(value.length > 200){
                error = "최대 200자까지 입력 가능합니다.";
            }
            break;
    }

    return error;
};