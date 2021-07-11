import React, {useCallback} from "react";
import {STitle, SFormContent, SForm, SRow, SErrorMessage} from '../style/common';

import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';

function ArrivalTimeInputForm() {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {arrivalTime} = state;

    const onChange = useCallback((e : React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        dispatch({type : 'SET_ARRIVAL_TIME', name , value, error : null});
    }, []);

    function hourRendering(selectHour : number | null){
        const result = [];
        for (let i=0; i<=23; i++){
            result.push(<option key={i} value={i} selected={selectHour === i}>{i} 시</option>);
        }
        return result;
    }

    
    function minuteRendering(selectMinute : number | null){
        const result = [];
        for (let i=0; i<=59; i++){
            result.push(<option key={i} value={i} selected={selectMinute === i}>{i} 분</option>);
        }
        return result;
    }

    return (
        <SForm>
            <STitle>숙소 도착예정 시간</STitle>

            <SFormContent>
                <SRow>
                    <select name="hour" defaultValue="default" onChange={onChange}>
                        <option value="default">시</option>
                        {hourRendering(arrivalTime.hour)}
                    </select>
                    <select name="minute" defaultValue="default" onChange={onChange} >
                        <option value="default">분</option>
                        {minuteRendering(arrivalTime.minute)}
                    </select>
                </SRow>
                {arrivalTime.error && <SErrorMessage>{arrivalTime.error}</SErrorMessage>}
            </SFormContent>
            
        </SForm>  
    );
}

export default ArrivalTimeInputForm;